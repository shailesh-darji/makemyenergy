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
import tick from "../assets/tick.png";
import Image from "next/image";
import axios from "axios";

export default function SolarHowItWorks() {
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
          </div>
          <div
            className="bg-white p-8"
            style={{ backgroundImage: "url(/1.png)", backgroundSize: "cover" }}
          >
            <div className="px-20 mx-20">
              <h1 className="text-4xl font-bold mb-10 text-center">
                How Solar Works: Harnessing the Power of the Sun
              </h1>
              <p className="text-lg mb-6">
                Solar power is a clean, abundant, and renewable source of energy
                that has the potential to revolutionize how we power our homes
                and businesses. In this guide, we&apos;ll explore the fundamental
                principles of solar energy, how solar panels work, and the
                benefits of harnessing the power of the sun.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Understanding Solar Energy
              </h2>
              <p className="text-lg mb-10">
                Solar energy is derived from the sun&apos;s rays, which contain
                photons that carry energy. When sunlight reaches the Earth, it
                can be harnessed and converted into electricity through
                photovoltaic (PV) cells, commonly known as solar panels. These
                cells use a process known as the photovoltaic effect to generate
                electricity.
              </p>
              <h2 className="text-xl font-bold mb-4">
                The Photovoltaic Effect
              </h2>
              <p className="text-lg mb-6">
                The photovoltaic effect is a process in which photons from
                sunlight strike the surface of a solar panel, dislodging
                electrons from their atomic orbits. This creates an electric
                current that can be captured and used as electricity.
              </p>
              <h2 className="text-2xl font-bold mb-4 mt-10 text-center">
                Solar Panels: How They Work
              </h2>
              <p className="text-lg mb-6">
                Solar panels are comprised of numerous solar cells connected
                together. Each solar cell consists of semiconductor materials,
                usually made of silicon, that are specially treated to create an
                electric field. When sunlight hits the solar cell, it excites
                the electrons within the material, allowing them to move freely.
              </p>
              <p className="text-lg mb-6">
                The electric field within the solar cell then forces these
                electrons to move in a particular direction, creating a flow of
                electric current. This flow of electrons is what we harness as
                electricity.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-center mt-10">
                Key Components of a Solar Panel System
              </h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  <strong>Solar Panels:</strong> As discussed earlier, solar
                  panels are the primary components that capture sunlight and
                  convert it into electricity.
                </li>
                <li className="text-lg mb-4">
                  <strong>Inverter:</strong> The electricity produced by solar
                  panels is in the form of direct current (DC). An inverter
                  converts this DC electricity into alternating current (AC),
                  which is the type of electricity used in homes and businesses.
                </li>
                <li className="text-lg mb-4">
                  <strong>Mounting and Racking System:</strong> Solar panels
                  need to be securely mounted on rooftops or the ground. Racking
                  systems provide the necessary support and alignment to ensure
                  optimal sun exposure.
                </li>
                <li className="text-lg">
                  <strong>Batteries (optional):</strong> Some solar systems may
                  include batteries to store excess electricity for later use,
                  especially during times when the sun isn&apos;t shining.
                </li>
              </ul>
              <h2 className="text-2xl font-bold mb-4 mt-10 text-center">
                Benefits of Solar Energy
              </h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  <strong>Renewable and Sustainable:</strong> Solar energy is an
                  abundant and renewable source of power. The sun will continue
                  to shine for billions of years, providing a consistent source
                  of clean energy.
                </li>
                <li className="text-lg mb-4">
                  <strong>Reduced Electricity Bills:</strong> By generating your
                  own electricity from solar panels, you can significantly
                  reduce your dependence on the grid and lower your electricity
                  bills.
                </li>
                <li className="text-lg mb-4">
                  <strong>Environmentally Friendly:</strong> Solar energy is a
                  clean, green source of power that produces no emissions,
                  pollutants, or greenhouse gases, making it environmentally
                  friendly and sustainable.
                </li>
                <li className="text-lg mb-4">
                  <strong>Energy Independence:</strong> Solar power allows
                  individuals and businesses to become more self-sufficient by
                  producing their own electricity, reducing reliance on external
                  sources.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="bg-blue-200"
            style={{ backgroundImage: "url(/3.png)" }}
          >
            <SimpleGrid
              columns={[null, null, 1, 2]}
              spacing={10}
              maxW="6xl"
              className="mx-auto pt-10"
            >
              <Box className="mt-10 flex justify-center lg:justify-end">
                <div className="m-4">
                  <p>Improving The Performance of Solar Energy</p>
                  <p className="font-extrabold text-3xl mt-2 ">
                    Residential <span>&#38;</span> Commercial <br /> Solar
                    Systems
                  </p>
                  <div className="my-[1vh] flex flex-row">
                    <div className="bg-white rounded-full w-[30px] h-[30px] mt-[1vh]">
                      <Image
                        src={tick}
                        className="w-[30px] h-[40px] mt-[-0.5vh]"
                        alt="Tick Mark Image"
                      ></Image>
                    </div>
                    <p className="w-56 py-2 pl-4">
                      {" "}
                      Receive an accurate quote within 3-5 days by filling out
                      this form or calling us at{" "}
                      <span className="text-3xl text-blue-900 font-bold">
                        1300377777
                      </span>
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
