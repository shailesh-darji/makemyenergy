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
import Link from "next/link";
import axios from 'axios'

export default function Upgrade_Air_Con_System() {
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

    await axios.post('/route/submitQuery', queryData).then((response) => {
      if (response.data && response.status == 200) {
        window.location.href="/thanks";
        toast({
          title: response.data,
          description: "We will get back to you soon",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    }).catch(error => { console.log(error) })
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
            <div className="w-full items-center flex flex-col mt-[5vh]">
              <p className="text-4xl font-extrabold ">
                Upgrade Your Air Con to Energy Efficient System
              </p>
              <p className="py-[1vh]">
                Services /{" "}
                <span className="text-orange-500">Energy Efficient System</span>{" "}
              </p>
            </div>
          </div>

          <section className="bg-white p-8 mx-20 px-20">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/Banner.jpeg"
                alt="Commercial Solar Banner Image"
                className=""
              />
            </div>
            <p className="text-gray-700 text-lg mb-8">
              Access the discount on installation or upgradation to new energy
              efficient Air Conditioning system.
            </p>
            <Link
              href="#form"
              scroll={false}
              className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-full"
            >
              Get A Quote
            </Link>
          </section>
          <div className="flex flex-col items-center bg-gradient-to-r from-[#FFD1FF]/40 to-[#FAD0C4]/30 rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              Choosing energy efficient Air Con system has many benefits
            </p>
            <ul className="list-disc list-inside text-lg text-left">
              <li className="mb-2">Long-term savings on your power bills</li>
              <li className="mb-2">
                Less Maintenance due to improved system design
              </li>
              <li className="mb-2">Lower your environmental impact</li>
              <li className="mb-2">Lower Electricity Bills</li>
            </ul>
          </div>
          <div className="flex flex-col items-center rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              Steps to get the upgrade
            </p>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">
                Contact Make My Energy. We will check your eligibility and offer
                you the best quote
              </li>
              <li className="mb-2">
                Choose an air conditioner that best suits your heating & cooling
                needs
              </li>
              <li className="mb-2">
                Our expert technician will install the Air con
              </li>
              <li className="mb-2">
                Technician will dispose of and recycle your old air conditioning
                system, as well as any other equipment that is being replaced
              </li>
              <li className="mb-2">
                Enjoy your new air conditioning system! If you have any issues,
                contact us for further assistance
              </li>
            </ul>
          </div>
          <div
            id="form"
            className="bg-blue-200"
            style={{ backgroundImage: "url(/3.png)" }}
          >
            <SimpleGrid
              columns={[null, null, 1, 2]}
              spacing={10}
              maxW="6xl"
              className="mx-auto mt-10  "
            >
              <Box className="mt-10 flex justify-center lg:justify-end">
                <div className="m-4">
                  <p className="font-semibold text-2xl mt-2 ">
                    Ready to save upto 40% on cooling costs?
                  </p>
                  <div className="my-[1vh] flex flex-row">
                    <p>
                      Contact Make My Energy, and our team will be happy to
                      assist you in your journey towards cleaner, more
                      cost-effective energy.
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
                          Upgrade Now
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
