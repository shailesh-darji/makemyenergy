import Head from "next/head";
import Navbar from "../components/navbar";
import TopFooter from "../components/topfooter";
import {
  Box,
  Button,
  HStack,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function About() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: null,
    pincode: "",
    state: "",
  });
  const updateData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const queryData = {
      mailSubject: "Query",
      mailBody:
        userData.name +
        "\n" +
        userData.email +
        "\n" +
        userData.phone +
        "\n" +
        userData.pincode +
        "\n" +
        userData.state,
    };

    await axios
      .post("/route/submitQuery", queryData)
      .then((response) => {
        if (response.data && response.status == 200) {
          window.location.href = "/thanks";
          toast({
            title: response.data,
            description: "We will get back to you soon",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Head>
        <title>Make My Energy</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <div>
          <div className="bg-gradient-to-r from-[#A6C1EE]/20 to-[#FBC2EB]/30">
            <Navbar />
          </div>
          <div className="bg-white">
            <div className="p-8 px-20 mx-20">
              <h1 className="text-4xl font-bold mb-4 text-center">
                Welcome to Make My Energy
              </h1>
              <p className="text-lg mb-6">
                Welcome to Make My Energy, your trusted partner for sustainable
                energy solutions in Australia. We specialize in empowering
                homeowners and businesses with eco-friendly alternatives,
                reducing their carbon footprint and energy bills.
              </p>
              <p className="text-lg mb-6">
                At Make My Energy, we&apos;re passionate about solar power, offering
                tailored solar solutions to harness the abundant Australian
                sunshine and convert it into clean, renewable energy.
                Additionally, our expertise extends to energy-efficient air
                conditioning and heat pump upgrades, ensuring optimal energy
                utilization while keeping your space comfortable year-round.
              </p>
              <p className="text-lg mb-6">
                Our mission is to revolutionize energy consumption by offering
                accessible, innovative, and cost-effective solutions. With a
                commitment to quality and sustainability, we strive to make a
                lasting positive impact on the environment and your bottom line.
              </p>
              <p className="text-lg mb-8">
                Join us in the journey towards a greener and more
                energy-efficient future. Let&apos;s work together to &apos;Make My Energy&apos;
                the energy of tomorrow.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-r from-[#FFD1FF]/40 to-[#FAD0C4]/30 rounded-md pb-16">
              <div className="px-20 mx-20">
                <p className="text-2xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5 text-center">
                  Why should you choose Make My Energy?
                </p>
                <ul className="list-disc pl-6">
                  <li className="text-lg mb-4">
                    <strong>Expertise and Customization:</strong> Our team of
                    seasoned experts assesses your unique energy needs and
                    tailors solutions to match.
                  </li>
                  <li className="text-lg mb-4">
                    <strong>Sustainable Solutions:</strong> We are dedicated to
                    sustainability and prioritize eco-friendly alternatives that
                    reduce your carbon footprint. By choosing Make My Energy,
                    you&apos;re contributing to a cleaner, more sustainable future
                    for Australia and the planet.
                  </li>
                  <li className="text-lg mb-4">
                    <strong>Cost-Effectiveness:</strong> We understand the
                    importance of cost savings. Our energy solutions not only
                    benefit the environment but also help you save on energy
                    bills in the long run.
                  </li>
                  <li className="text-lg mb-4">
                    <strong>Quality Assurance:</strong> We uphold the highest
                    standards of quality in all our services and products.
                  </li>
                  <li className="text-lg">
                    <strong>Customer-Centric Approach:</strong> Customer
                    satisfaction is our priority. We strive to provide
                    exceptional service and support, ensuring a seamless and
                    positive experience from consultation to installation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-200">
            <SimpleGrid
              columns={[null, null, 1, 2]}
              spacing={10}
              maxW="6xl"
              className="mx-auto pt-10"
            >
              <Box className="mt-10 flex justify-center lg:justify-end">
                <div className="m-4">
                  <p className="font-semibold text-2xl mt-2 ">
                    Have more questions or need personalized advice?
                  </p>
                  <div className="my-[1vh] flex flex-row">
                    <p>
                      Contact Make My Energy, and our team will be happy to
                      assist you in your journey towards cleaner, more
                      cost-effective energy for your home.
                    </p>
                  </div>
                </div>
              </Box>
              <Box>
                <div className="shadow-xl mt-4 mb-16 rounded-md border-2 border-white bg-transparent mx-1 sm:mx-10">
                  <form onSubmit={(e) => submitData(e)} className="px-[1.8vw] ">
                    <p className="text-blue-900 font-bold text-lg pt-5 py-[0.5vh] ">
                      Request A Quote
                    </p>
                    <VStack>
                      <Box className="ml-0  w-full mt-4">
                        <Text mb="8px" className="font-semibold">
                          Name
                        </Text>
                        <Input
                          placeholder="Name"
                          size="md"
                          background="white"
                          border="none"
                          type="text"
                          onChange={updateData}
                          name="name"
                          value={userData.name}
                        />
                      </Box>
                      <Box className="ml-0 w-full mt-4 ">
                        <HStack spacing={2} className="mt-2 ">
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              Email
                            </Text>
                            <Input
                              placeholder="abcxyz@gmail.com"
                              size="md"
                              background="white"
                              border="none"
                              type="email"
                              onChange={updateData}
                              name="email"
                              value={userData.email}
                            />
                          </Box>
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              Number
                            </Text>
                            <Input
                              placeholder="+60 3653653650"
                              size="md"
                              background="white"
                              border="none"
                              type="number"
                              onChange={updateData}
                              name="phone"
                              value={userData.phone}
                            />
                          </Box>
                        </HStack>
                      </Box>
                      <Box className="ml-0 w-full mt-4 ">
                        <HStack spacing={2} className="mt-2 ">
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              Pincode
                            </Text>
                            <Input
                              placeholder="Enter Your Pincode"
                              size="md"
                              background="white"
                              border="none"
                              type="text"
                              onChange={updateData}
                              name="pincode"
                              value={userData.pincode}
                            />
                          </Box>
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              State
                            </Text>
                            <Input
                              placeholder="Enter Your State"
                              size="md"
                              background="white"
                              border="none"
                              type="text"
                              onChange={updateData}
                              name="state"
                              value={userData.state}
                            />
                          </Box>
                        </HStack>
                      </Box>
                      <Box className="mt-8 w-full">
                        <Button
                          colorScheme="facebook"
                          type="submit"
                          className="w-full mt-4 mb-4"
                        >
                          Submit
                        </Button>
                      </Box>
                    </VStack>
                  </form>
                </div>
                <br />
                <br />
                <br />
                <br />
              </Box>
            </SimpleGrid>
          </div>
          {/* Additional Footer Starts Here  */}
          <TopFooter />
          {/* Additional Footer Ends Here  */}
        </div>
      </main>
      {/* Footer Starts */}
    </div>
  );
}
