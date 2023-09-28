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
import axios from "axios";

export default function Residential_Solar() {
  const faqs = [
    {
      question: "What is solar energy, and how does it work?",
      answer:
        "Solar energy is a renewable energy source that harnesses the power of the sun to generate electricity. Solar panels, typically installed on rooftops, capture sunlight and convert it into electricity through photovoltaic cells. This electricity can then be used to power your home, reducing your reliance on traditional energy sources.",
    },
    {
      question: "How much can I save with a solar system?",
      answer:
        "Savings from a solar system depend on various factors, including your location, the size of the system, and your energy consumption. On average, homeowners can expect to save anywhere from 20% to 70% on their electricity bills with solar panels.",
    },
    {
      question: "Is my home suitable for solar panel installation?",
      answer:
        "In most cases, residential homes are suitable for solar panel installations. Factors such as roof orientation, shading, and available space can affect the system's efficiency. Our experts will assess your home during a consultation to determine its suitability for solar.",
    },
    {
      question: "How long does the installation process take?",
      answer:
        "The installation process typically takes one to three days, depending on the system's size and complexity. Make My Energy's accredited professionals ensure efficient and safe installations.",
    },
    {
      question: "What maintenance is required for a solar system?",
      answer:
        "Solar systems are relatively low maintenance. Regular cleaning to remove dirt and debris and occasional inspections are usually sufficient. Make My Energy offers maintenance services to keep your system in optimal condition.",
    },
    {
      question: "Can I store excess energy in batteries?",
      answer:
        "Yes, you can store excess energy in batteries for later use, especially during periods of low sunlight or power outages. Battery storage allows you to maximize your energy independence.",
    },
    {
      question: "Is there a warranty on solar panels and inverters?",
      answer:
        "Yes, solar panels and inverters typically come with warranties. The length of these warranties varies by manufacturer but often ranges from 10 to 25 years. Make sure to discuss warranty details with our team when choosing your system.",
    },
    {
      question:
        "Will I still receive an electricity bill after installing solar panels?",
      answer:
        "You may still receive a small electricity bill, particularly during periods of high energy consumption or when your system is generating less electricity than you use. However, your bill will be significantly reduced compared to relying solely on the grid.",
    },
    {
      question:
        "Are there government incentives or rebates for installing solar panels?",
      answer:
        "Government incentives and rebates for solar installations vary by location. In Australia, the Small-scale Renewable Energy Scheme (SRES) offers financial incentives for eligible installations. Our team can provide information on available incentives in your area.",
    },
    {
      question: "Why choose Make My Energy for my solar system?",
      answer:
        "Make My Energy is a certified solar retailer through the Clean Energy Council, ensuring the highest quality products and installations. We provide expert guidance, ongoing support, and top-tier solar solutions tailored to your specific needs.",
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
            <div className="w-full items-center flex flex-col mt-[5vh]">
              <p className="text-4xl font-extrabold ">Residential Solar</p>
              <p className="py-[1vh]">
                Services /{" "}
                <span className="text-orange-500">Residential Solar</span>{" "}
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
              Are you tired of watching your electricity bills climb ever
              higher? Reduce your carbon footprint and make a positive impact on
              the environment with our solar solutions. It's time to discover
              the incredible potential of solar energy for your home, and Make
              My Energy is here to guide you on this journey.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              We're committed to providing you with top-notch residential solar
              solutions that not only save you money but also help reduce your
              carbon footprint. Say goodbye to soaring electricity bills and
              hello to clean, sustainable energy for your home.
            </p>
            <button className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-full">
              Learn More
            </button>
          </section>
          <div className="flex flex-col items-center bg-gradient-to-r from-[#FFD1FF]/40 to-[#FAD0C4]/30 rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              How Solar Systems Work
            </p>
            <img
              src="/Banner.jpeg"
              alt="Solar Energy Generation Diagram"
              className="mb-4"
            />
            <p className="text-lg p-5 mx-20">
              Solar systems work by harnessing the sun's boundless energy
              through photovoltaic panels. These panels are strategically placed
              on your roof to capture sunlight, which is then converted into
              electricity through a process called photovoltaic conversion. The
              generated electricity can power your home's appliances, lighting,
              and more. What's even more remarkable is that any excess energy
              can be sent back to the grid, earning you credits or reducing your
              energy bills further. It's a clean, sustainable, and
              cost-effective way to meet your energy needs while reducing your
              impact on the environment.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              Benefits of Solar System for your home
            </p>
            <ul className="list-disc list-inside text-lg mx-20">
              <li className="mb-2">
                <span className="font-semibold">Lower Energy Bills:</span> Solar
                energy significantly reduces your monthly electricity bills,
                leading to substantial savings.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Eco-Friendly:</span> Solar power
                is environmentally friendly, producing zero emissions and
                contributing to a cleaner planet.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Increased Home Value:</span>{" "}
                Solar installations can boost your property's resale value,
                attracting eco-conscious buyers.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Energy Security:</span> Generate
                your electricity, ensuring independence from power outages and
                price fluctuations.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Minimal Maintenance:</span>{" "}
                Solar systems require minimal maintenance, offering hassle-free
                energy production.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Government Incentives:</span>{" "}
                Many regions offer incentives and rebates for solar
                installations, making it even more cost-effective.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-r from-[#FFD1FF]/40 to-[#FAD0C4]/30 rounded-md pb-16">
            <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
              Why Choose Make My Energy for Your Solar System
            </p>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">
                <span className="font-semibold">Quality Assurance:</span> We use
                We use Tier 1 solar panels and high-quality inverters to ensure
                optimal performance and durability.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Certified Installation:</span>{" "}
                Our installations are carried out by Clean Energy
                Council-accredited professionals, guaranteeing safety and
                efficiency.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Expert Guidance:</span> Our Our
                friendly and knowledgeable team provides expert advice tailored
                to your specific energy needs, ensuring you get the best system
                for your home.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Ongoing Support:</span>
                We're committed to your long-term satisfaction. Beyond
                installation, we offer maintenance and support services to keep
                your solar system running smoothly.
              </li>
            </ul>
          </div>

          <section>
            <div className="flex flex-col items-center rounded-md pb-16">
              <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">
                Recent Solar Installations
              </p>
              <img
                src="/Banner.jpeg"
                alt="Solar Energy Generation Diagram"
                className="mb-4"
              />
              <p className="text-lg p-5 mx-20">
                Discover the incredible transformations we've brought to homes
                like yours through our recent solar installations. See firsthand
                how solar power can make a difference in your life.
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
