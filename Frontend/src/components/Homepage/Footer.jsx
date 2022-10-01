
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={"whiteAlpha.500"}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,

}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={9}
      h={9}
      textDecoration={"none"}
      cursor={'pointer'}
      as={'a'}
      href={href}
    fontSize={"6xl"}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('#E57CD8', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('rgb(44, 19, 56)', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}>
      <Container as={Stack} maxW={['96%']} py={10} >
        <Box w={[250, 260, 270]} ml={[-10]}>  
            <Image src="https://i.postimg.cc/1RDLznkj/tt.png" alt="" />
        </Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md:3,lg:6 }} spacing={8}  >
          <Stack align={'flex-start'}>
            <ListHeader>TOGGL GLOBAL</ListHeader>
            <Link  href={'#'} fontWeight={"normal"} textDecor={"none"}>Blog</Link>
            <Link href={'#'} fontWeight={"normal"}>Our Mission</Link>
            <Link href={'#'} fontWeight={"normal"}>Working at Toggl</Link>
            <Link href={'#'} fontWeight={"normal"}>Legal Terms</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>PRODUCT</ListHeader>
            <Link href={'#'}fontWeight={"normal"}>Features</Link>
            <Link href={'#'}fontWeight={"normal"}>Pricing</Link>
            <Link href={'#'}fontWeight={"normal"}>Integrations</Link>
            <Link href={'#'}fontWeight={"normal"}>Case Studies</Link>
            <Link href={'#'}fontWeight={"normal"}>API</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>USE CASES</ListHeader>
            <Link href={'#'}fontWeight={"normal"}>Billing and Invoicing</Link>
            <Link href={'#'}fontWeight={"normal"}>Employee Time Tracking</Link>
            <Link href={'#'}fontWeight={"normal"}>Project Budgeting</Link>
            <Link href={'#'}fontWeight={"normal"}>Reporting</Link>
            <Link href={'#'}fontWeight={"normal"}>Payroll</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>DOWNLOAD</ListHeader>
            <Link href={'#'}fontWeight={"normal"}>Mobile Apps</Link>
            <Link href={'#'}fontWeight={"normal"}>Privacy Policy</Link>
            <Link href={'#'}fontWeight={"normal"}>Desktop Apps</Link>
            <Link href={'#'}fontWeight={"normal"}>Browser Extensions</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>HELP</ListHeader>
            <Link href={'#'}fontWeight={"normal"}>Support & Knowledge</Link>
            <Link href={'#'}fontWeight={"normal"}>Request A Demo</Link>
            <Link href={'#'}fontWeight={"normal"}>Desktop Apps</Link>
            <Link href={'#'}fontWeight={"normal"}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>RESOURCES</ListHeader>
            <Link href={'#'}fontWeight={"normal"}>Work From Home Hub</Link>
            <Link href={'#'}fontWeight={"normal"}>Business Resources</Link>
            <Link href={'#'}fontWeight={"normal"}>Productivity Resources</Link>
            <Link href={'#'}fontWeight={"normal"}>Timesheet Templates</Link>
            <Link href={'#'}>Media Kit</Link>
          </Stack>
        
        </SimpleGrid>
      </Container>

      <Stack direction={{base:"column",md:"row",lg:"row"}} spacing={8} ml={['2rem']}
      marginBottom={["30px"]}  justifyContent={["center"]}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'linkdin'} href={'#'}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={'Github'} href={'#'}>
              <FaGithub/>
            </SocialButton>
          </Stack>


          <Stack direction={{base:"column",md:"row",lg:"row"}} width={["100%"]} bg={"#412A4C"}>
            <Box w={[220, 270, 270]} mt={[6]} 
            fontSize={{ base: '12px', md: '16px', lg: '16px' }}
            >
             Discover other Toggl tool:
            </Box>
            <Box><img src="https://i.postimg.cc/zB0nGkkr/tp.png" alt="" /></Box>
            <Box><img src="https://i.postimg.cc/qMZCYR11/th.png" alt="" /></Box>
          </Stack>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxWidth
          color={"black"}
          bg={"#e57cd8"}
          py={4}
         
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
         >
          <Box w={[200, 260, 260]} ml={[3]} fontSize={{ base: '12px', md: '16px', lg: '16px' }}
           >© 2022 Toggl. All rights reserved</Box>
         
        </Container>
      </Box>
    </Box>
  );
}