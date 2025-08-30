import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import InquiryFormComponent from "@/components/accommodations/InquiryFormComponent";
import DatePackageSelector from "@/components/accommodations/DateSelector";
import { BookingDetails } from "@/types/accommodation";
import {
  CheckCircle,
  Users,
  Calendar,
  ArrowLeft,
  ShieldCheck,
  Accessibility,
  Activity,
} from "lucide-react";

const StudioPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDatePackage, setShowDatePackage] = useState(false);
  const [selectedSanctuary, setSelectedSanctuary] = useState<string>("");
  const [packageDetails, setPackageDetails] = useState<any>(null);

  const collections = [
    {
      name: "CREST",
      image:
        "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Accommodations/Studio%20Appartment/Crest/_DSC1559-Color-Grade.jpg?updatedAt=1749656210407",
      description:
        "Located on the lower levels, this thoughtfully curated studio is perfect for those who appreciate convenience without compromise. Large windows bring in natural light while elegant interiors create a warm, inviting atmosphere. Whether you're staying a few nights or a few months, Crest offers a seamless functionality, just steps away from everything you need.",
      features: [
        "Fully Furnished Apartment",
        "Air Conditioning (Hot & Cold)",
        "Fully Equipped Kitchen",
        "Well-Appointed Bathroom",
        "Complimentary Wi-Fi",
        "Complimentary Breakfast",
        "Access to Amenities"

      ],
      recommendation:
        "Recommended for: Guests who value quick access to amenities, minimal stair or lift use, and a seamless living experience.",
    },
    {
      name: "HAMILTON",
      image:
        "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Accommodations/Studio%20Appartment/Hamilton/_DSC1548-Color-Grade.jpg?updatedAt=1749656376442",
      description:
        "Positioned on higher floors, Hamilton studio apartments offer expansive views along with refined privacy. These premium residences are perfect for guests seeking a tranquil yet connected experience. With spacious layouts and curated interiors, Hamilton provides a sophisticated retreat for longer or more peaceful stays.",
      features: [
        "Fully Furnished Apartment",
        "Air Conditioning (Hot & Cold)",
        "Fully Equipped Kitchen",
        "Well-Appointed Bathroom",
        "Complimentary Wi-Fi",
        "Complimentary Breakfast",
        "Access to Amenities"

      ],
      recommendation:
        "Recommended for: Individuals or couples who enjoy open views, a quiet setting, and a balance between luxury and convenience.",
    },
    {
      name: "SKYLINE",
      image:
        "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Accommodations/Studio%20Appartment/Skyline/_DSC1512-Color-Grade.jpg?updatedAt=1749656414216",
      description:
        "Located at the highest level of the property, Skyline studio apartments offer unmatched panoramic views and a heightened sense of serenity. Designed for those who appreciate exclusivity and elevation, Skyline delivers a luxurious, quiet sanctuary ideal for unwinding, reflecting, or working in peace.",
      features: [
        "Fully Furnished Apartment",
        "Air Conditioning (Hot & Cold)",
        "Fully Equipped Kitchen",
        "Well-Appointed Bathroom",
        "Complimentary Wi-Fi",
        "Complimentary Breakfast",
        "Access to Amenities"

      ],
      recommendation:
        "Recommended for: Guests seeking a top-floor location with unobstructed views of the skyline, flooded with natural light throughout the day",
    },
  ];

  const handleSelectSanctuary = (sanctuaryName: string) => {
    setSelectedSanctuary(sanctuaryName);
    setShowDatePackage(true);
    setTimeout(() => {
      console.log("scrolling...");

      const element = document.getElementById("Stay_Packages");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleDatePackageSelect = (details: Partial<BookingDetails>) => {
    console.log("Package details selected:", details);
    setPackageDetails(details);
    setShowForm(true);
  };

  const handleFormSubmit = (formData: any) => {
    console.log("Form submitted with sanctuary:", selectedSanctuary, formData);
    window.open("/thank-you", "_blank");
  };

  const handleBackToSanctuary = () => {
    window.location.href = "/#accommodations";
  };

  if (showForm) {
    const mockBookingDetails: any = {
      roomType: {
        id: "studio",
        name: "Studio Apartment",
        image:
          collections.find((c) => c.name === selectedSanctuary)?.image || "",
        size: "650 sq ft",
        guests: 2,
        startingPrice: 7500,
        HAMILTON: 8000,
        CREST:7500,
        SKYLINE:8500,
        description: 'Comfortable studio apartment',
        amenities: []
      },
      roomCategory: {
        id: selectedSanctuary.toLowerCase(),
        name: selectedSanctuary,
        image:
          collections.find((c) => c.name === selectedSanctuary)?.image || "",
        description:
          collections.find((c) => c.name === selectedSanctuary)?.description ||
          "",
        size: "650 sq ft",
        guests: 2,
        startingPrice: 7500,
        HAMILTON: 8000,
        CREST:7500,
        SKYLINE:8500,
        amenities: collections.find(c => c.name === selectedSanctuary)?.features || [],
        roomTypeId: 'studio'
      },
      nights: packageDetails?.nights || 1,
      isPackage: packageDetails?.isPackage || false,
      packageDetails: packageDetails?.packageDetails || packageDetails,
      totalPrice: packageDetails?.totalPrice || 15000,
    };

    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <InquiryFormComponent
            bookingDetails={mockBookingDetails}
            onSubmit={handleFormSubmit}
            onBack={() => setShowForm(false)}
          />
        </div>
        <Footer />
      </div>
    );
  }

  if (showDatePackage) {
    const mockRoomCategory = {
      id: selectedSanctuary.toLowerCase(),
      name: selectedSanctuary,
      image: collections.find((c) => c.name === selectedSanctuary)?.image || "",
      description:
        collections.find((c) => c.name === selectedSanctuary)?.description ||
        "",
      size: "650 sq ft",
      guests: 2,
      startingPrice: 7500,
      HAMILTON: 8000,
      CREST:7500,
      SKYLINE:8500,
      amenities: collections.find(c => c.name === selectedSanctuary)?.features || [],
      roomTypeId: 'studio'
    };

    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <DatePackageSelector
            roomCategory={mockRoomCategory}
            onSelect={handleDatePackageSelect}
            onBack={() => setShowDatePackage(false)}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Accommodations/Studio%20Appartment/Crest/Cover-Color-Grade.jpg?updatedAt=1749656252797')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Choose Your Studio Collection
          </h1>
          <p className="text-xl font-light">
            Discover our carefully curated studio collections designed for
            modern living
          </p>
        </div>
      </section>

      <main className="section-padding">
        {/* Back Button */}
        <div className="container-custom mb-8">
          <Button
            variant="outline"
            onClick={handleBackToSanctuary}
            className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Choose Your Apartments
          </Button>
        </div>

        {/* Collections */}
        <section className="container-custom space-y-16">
          {collections.map((collection, index) => (
            <div key={collection.name} className="space-y-8">
              <Card className="overflow-hidden border-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-96 lg:h-full object-cover"
                    />
                  </div>
                  <div
                    className={`p-12 flex flex-col justify-center bg-gradient-to-br from-stone-50 to-white ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <Badge className="bg-eden/10 text-eden border-eden px-4 py-2 rounded-full mr-4 text-sm font-medium">
                        Studio Collection
                      </Badge>
                    </div>

                    <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">
                      {collection.name}
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-8 text-lg font-light">
                      {collection.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {collection.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-stone-600"
                        >
                          <CheckCircle className="w-5 h-5 text-eden mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {collection.recommendation && (
                      <p className="text-center text-stone-600 mb-8 text-sm italic">
                        {collection.recommendation}
                      </p>
                    )}

                    <div className="flex space-x-4">
                      <Button
                        size="lg"
                        className="flex-1 bg-eden hover:bg-emerald-700 text-white px-4 py-4 rounded-xl  font-medium transition-all duration-300"
                        onClick={() => handleSelectSanctuary(collection.name)}
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Choose stay options
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </section>

        {/* Safety & Accessibility Features Section */}
        <section className="bg-gradient-to-r from-stone-50 to-stone-100 py-16 mt-20 rounded-3xl">
          <div className="container-custom text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-stone-800">
              Safety & Accessibility Features
            </h2>
            <div className="w-full flex justify-center">
            <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
            </div>
            <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto font-light">
              All our residences are designed with senior safety and
              accessibility in mind.
            </p>
          </div>

          <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-white border-0">
              <div className="w-full flex justify-center">
                <div className=" flex justify-center mb-4 text-eden bg-eden-light/50 w-12 h-12 rounded-full  items-center  group-hover:bg-eden group-hover:text-white transition-all duration-300">
                  <Activity />
                </div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">
                Emergency Systems
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                All units equipped with emergency call systems that connect
                directly to our 24/7 medical team.
              </p>
            </Card>

            <Card className="p-6 text-center bg-white border-0">
              <div className="w-12 h-12 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-full flex justify-center">
                  <div className=" flex justify-center mb-4 text-eden bg-eden-light/50 w-12 h-12 rounded-full  items-center  group-hover:bg-eden group-hover:text-white transition-all duration-300">
                    <Accessibility />
                  </div>
                </div>
                <div className="w-6 h-6 bg-eden rounded-sm"></div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">
                Accessible Design
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Wider doorways, grab bars, and step-free entrances for ease of
                movement and enhanced accessibility.
              </p>
            </Card>

            <Card className="p-6 text-center bg-white border-0">
              <div className="w-12 h-12 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-full flex justify-center">
                  <div className=" flex justify-center mb-4 text-eden bg-eden-light/50 w-12 h-12 rounded-full  items-center  group-hover:bg-eden group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-droplet-off-icon lucide-droplet-off"
                    >
                      <path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
                      <path d="m2 2 20 20" />
                      <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">
                Anti-Slip Flooring
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                High-quality anti-slip flooring throughout, particularly in
                bathrooms and other wet areas.
              </p>
            </Card>

            <Card className="p-6 text-center bg-white border-0">
              {/* <div className="w-12 h-12 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-eden rounded-sm"><ShieldCheck color='#fff'  /></div>
              </div> */}
              <div className="w-full flex justify-center">
                <div className=" flex justify-center mb-4 text-eden bg-eden-light/50 w-12 h-12 rounded-full  items-center  group-hover:bg-eden group-hover:text-white transition-all duration-300">
                  <ShieldCheck />
                </div>
              </div>

              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">
                24/7 Security
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Round-the-clock security personnel, CCTV monitoring, and secure
                access to all areas of the property.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudioPage;
