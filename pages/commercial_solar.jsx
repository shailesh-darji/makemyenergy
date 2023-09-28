import Head from "next/head";
import Navbar from "../components/navbar";
import TopFooter from "../components/topfooter";
import FAQSection from "../components/FAQSection";
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
import Image from "next/image";
import tick from "../assets/tick.png";
import { useState } from "react";
import axios from 'axios'

export default function Commercial_Solar() {
  // Define your FAQ questions and answers here
  const faqs = [
    {
      question: "How much can I save with a commercial solar system?",
      answer:
        "Savings depend on factors like system size and energy consumption. Businesses can typically save 20% to 70% on electricity bills with commercial solar.",
    },
    {
      question:
        "What is the installation timeline for commercial solar systems?",
      answer:
        "Installation times vary but usually take a few weeks to complete, depending on the project's scale.",
    },
    {
      question:
        "Is my commercial property suitable for solar panel installation?",
      answer:
        "Most commercial properties are suitable. Our experts assess factors like roof space, orientation, and shading during consultation.",
    },
    {
      question: "What maintenance does a commercial solar system require?",
      answer:
        "Commercial systems are low maintenance, with occasional cleaning and inspections. Our services ensure peak performance.",
    },
    {
      question:
        "Are there government incentives for commercial solar installations?",
      answer:
        "Yes, various regions offer incentives, tax credits, and grants for commercial solar projects. We can provide information on available programs in your area.",
    },
    {
      question:
        "Why should I choose Make My Energy for my commercial solar system?",
      answer:
        "Make My Energy is a Clean Energy Council-certified solar retailer, ensuring top-quality products, installations, and ongoing support for your business.",
    },
  ];
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
              <p className="text-4xl font-extrabold ">Commercial Solar</p>
              <p className="py-[1vh]">
                Services /{" "}
                <span className="text-orange-500">Commercial Solar</span>{" "}
              </p>
            </div>
          </div>

          <section className="bg-white p-8 mx-20">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/Banner.jpeg"
                alt="Commercial Solar Banner Image"
                className=""
              />
            </div>
            <p className="text-gray-700 text-lg mb-8">
              At Make My Energy, we understand the unique energy needs of
              businesses across Australia. With a majority of commercial
              establishments consuming power during daylight hours, investing in
              commercial solar installations is a financially astute decision.
              As your dedicated commercial solar provider, we offer
              comprehensive services that encompass design, installation, and
              maintenance of solar systems tailored to your business
              requirements.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Our customer-centric approach places a strong emphasis on
              delivering tangible benefits through energy savings and
              environmental responsibility. One of the most compelling reasons
              for businesses to choose solar is the substantial return on
              investment it offers, coupled with the opportunity to leverage
              commercial solar rebates and incentives. By embracing solar power,
              you not only reduce operational costs but also build a
              sustainable, eco-conscious business that contributes to a greener
              future.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Worried about the complexities of owning and operating a
              commercial solar system? Make My Energy has you covered with Solar
              Power Purchase Agreements (PPAs), providing you with the benefits
              of solar energy without the hassle of system ownership and
              maintenance. Join the solar revolution and make a smart,
              eco-friendly choice for your business with Make My Energy.
            </p>
            <button className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-full">
              Learn More
            </button>
          </section>
          <div className="flex flex-col items-center bg-gradient-to-r from-[#FFD1FF]/40 to-[#FAD0C4]/30 rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              How Commercial Solar Systems Work
            </p>
            <img
              src="/Banner.jpeg"
              alt="Solar Energy Generation Diagram"
              className="mb-4"
            />
            <p className="text-lg p-5 mx-20">
              Commercial solar systems function similarly to residential ones
              but on a larger scale. Solar panels, strategically installed on
              your commercial property, capture sunlight and convert it into
              electricity through photovoltaic cells. This electricity can be
              used to power your business operations, reducing your reliance on
              traditional energy sources and lowering your utility bills.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              Benefits of Commercial Solar Systems
            </p>
            <ul className="list-disc list-inside text-lg mx-20">
              <li className="mb-2">
                <span className="font-semibold">Cost Savings:</span> Solar
                energy significantly reduces your monthly electricity costs,
                leading to substantial savings for your business.
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  Environmental Responsibility:
                </span>{" "}
                Solar power is eco-friendly, producing zero emissions and
                helping combat climate change.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Enhanced Business Value:</span>{" "}
                A solar installation can increase the value of your commercial
                property,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; making it more attractive to
                environmentally conscious investors and tenants.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Energy Independence:</span>{" "}
                Generate your electricity, ensuring a stable power supply and
                insulating your business from energy price fluctuations.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Low Maintenance:</span>{" "}
                Commercial solar systems require minimal upkeep, providing a
                reliable and hassle-free energy source for your business.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Financial Incentives:</span>{" "}
                Many regions offer incentives, tax benefits, and grants for
                commercial solar installations, making it a financially sound
                decision.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-r from-[#FFD1FF]/40 to-[#FAD0C4]/30 rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              Why Choose Make My Energy for Your Commercial Solar System
            </p>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">
                <span className="font-semibold">Quality Assurance:</span> We use
                top-tier solar panels and high-quality inverters to ensure
                optimal performance and longevity for your commercial system.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Certified Installation:</span>{" "}
                Our Clean Energy Council-accredited experts guarantee safe,
                efficient, and timely installations tailored to your business
                needs.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Expert Consultation:</span> Our
                experienced team offers expert advice and custom solutions to
                maximize your energy savings and ROI.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Ongoing Support:</span> Beyond
                installation, we provide maintenance and support services to
                keep your commercial solar system operating smoothly.
              </li>
            </ul>
          </div>

          <section>
            <div className="flex flex-col items-center rounded-md pb-16">
              <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
                Recent Commercial Solar Installations
              </p>
              <img
                src="/Banner.jpeg"
                alt="Solar Energy Generation Diagram"
                className="mb-4"
              />
              <p className="text-lg p-5 mx-20">
                Explore our recent commercial solar installations and witness
                firsthand how solar power can revolutionize your business's
                energy strategy.
              </p>
            </div>
          </section>
          <FAQSection faqs={faqs} />
          <div
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
