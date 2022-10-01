import { useNavMenu } from "../hooks/useNavMenu";
import { Box, Collapse, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { SubmenuItem } from "./SubmenuItem";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const DesktopSubmenu = (props) => {
  const { link } = props;
  const { isOpen, getMenuProps, getTriggerProps } = useNavMenu();
  const { screen } = useScreenWidth();
  return (
    <>
      <NavLink.Desktop
        display="flex"
        alignItems="center"
        as="button"
        type="button"
        px="4"
        fontWeight="semibold"
        {...getTriggerProps()}
      >
        <Box>{link.label}</Box>
        <Box marginStart="2" as={FaChevronDown} fontSize="xs" />
      </NavLink.Desktop>

      <NavMenu {...getMenuProps()} animate={isOpen ? "open" : "closed"}>
        <Box maxW="7xl" mx="auto" px="8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: screen > 800 ? "2fr 1fr" : "1fr",
            }}
          >
            <div>
              <h2
                style={{
                  margin: "1rem 0",
                  fontSize: "1.2rem",
                  fontWeight: "bolder",
                  color: "gray",
                }}
              >
                {link.title1}
              </h2>
              <SimpleGrid spacing="7" columns={2} paddingRight="2rem">
                {link.children?.map((item, idx) => (
                  <SubmenuItem
                    key={idx}
                    title={item.label}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </SubmenuItem>
                ))}
              </SimpleGrid>
              {link.block && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem",
                    backgroundColor: "snow",
                    margin: "2rem",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <div>{link.block.text}</div>
                  <div>{link.block.icon}</div>
                </div>
              )}
            </div>
            <div>
              <h2
                style={{
                  margin: "1rem 0",
                  fontSize: "1.2rem",
                  fontWeight: "bolder",
                  color: "gray",
                }}
              >
                {link.title2}
              </h2>
              <SimpleGrid spacing="8" columns={1}>
                {link.sideMenu?.map((item, idx) => (
                  <SubmenuItem
                    key={idx}
                    title={item.label}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </SubmenuItem>
                ))}
              </SimpleGrid>
            </div>
          </div>
        </Box>
      </NavMenu>
    </>
  );
};

export const MobileSubMenu = (props) => {
  const { link } = props;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <NavLink.Mobile
        as="button"
        textAlign="start"
        type="button"
        cursor="pointer"
        onClick={onToggle}
        paddingEnd="4"
      >
        <Box flex="1">{link.label}</Box>
        <Box
          as={FaChevronDown}
          transform={`rotate(${isOpen ? "180deg" : "0deg"})`}
        />
      </NavLink.Mobile>
      <Collapse in={isOpen}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            padding: "1rem",
          }}
        >
          <div>
            <h2
              style={{
                margin: "1rem 0",
                fontSize: "1.2rem",
                fontWeight: "bolder",
                color: "gray",
              }}
            >
              {link.title1}
            </h2>
            <SimpleGrid spacing="10" columns={1} paddingRight="2rem">
              {link.children?.map((item, idx) => (
                <SubmenuItem
                  key={idx}
                  title={item.label}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </SubmenuItem>
              ))}
            </SimpleGrid>
            {link.block && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem",
                  backgroundColor: "snow",
                  margin: "1rem 0",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <div>{link.block.text}</div>
                <div style={{ margin: "1rem" }}>{link.block.icon}</div>
              </div>
            )}
          </div>
          <div>
            <h2
              style={{
                margin: "1rem 0",
                fontSize: "1.2rem",
                fontWeight: "bolder",
                color: "gray",
              }}
            >
              {link.title2}
            </h2>
            <SimpleGrid spacing="10" columns={1}>
              {link.sideMenu?.map((item, idx) => (
                <SubmenuItem
                  key={idx}
                  title={item.label}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </SubmenuItem>
              ))}
            </SimpleGrid>
          </div>
        </div>
      </Collapse>
    </Box>
  );
};