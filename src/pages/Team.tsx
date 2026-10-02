import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Cherish Santoshi",
    role: "Organizer",
    photo: "/pfp/cherish.jpeg",
    linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
  },
  {
    name: "Tushar Shah",
    role: "Co-Organizer",
    photo: "/pfp/tushar.jpeg",
    linkedin: "https://www.linkedin.com/in/tushar21shah/",
  },
  // Add more team members here
];

// The 2026 core team, kept in step with the DevFest Chandigarh 2026 site.
const volunteers = [
  {
    name: "Purahan Gupta",
    role: "Core Team",
    photo: "/pfp/purahan.JPG",
    linkedin: "https://www.linkedin.com/in/purahan/",
  },
  {
    name: "Divanshi Arora",
    role: "Core Team",
    photo: "/pfp/divanshi.jpeg",
    linkedin: "https://www.linkedin.com/in/divanshi-arora-/",
  },
  {
    name: "Shatakshi",
    role: "Core Team",
    photo: "/pfp/shatakshi.jpeg",
    linkedin: "https://www.linkedin.com/in/shatakshi-bhardwaj-445295281/",
  },
  {
    name: "Krishanu Mishra",
    role: "Core Team",
    photo: "/pfp/krishanu.jpg",
    linkedin: "https://www.linkedin.com/in/krishanu-mishra-aa531b276/",
  },
  {
    name: "Sarang Ahlawat",
    role: "Core Team",
    photo: "/pfp/sarang.jpeg",
    linkedin: "https://www.linkedin.com/in/sarangahlawat/",
  },
];

export default function Team() {
  return (
    <>
      {/* Desktop/Laptop header image */}
      <img
        src="/images/header.png"
        alt="Cloud Community Days 2026 Logo"
        className="w-full mb-6 object-contain hidden sm:block"
      />
      {/* Mobile header image */}
      <img
        src="/images/mobile_header.png"
        alt="Cloud Community Days 2026 Mobile Logo"
        className="w-full object-contain block sm:hidden"
      />
      <section className="container py-16">
        <Helmet>
          <title>Team • Cloud Community Days</title>
          <meta
            name="description"
            content="Meet the team and volunteers behind Cloud Community Days."
          />
          <link rel="canonical" href="/team" />
        </Helmet>
        <h1 className="font-display text-4xl mb-8 text-center">Our Team</h1>
        <div className="flex justify-center mb-12">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="flex flex-col items-center p-6 text-center w-full max-w-xs mx-auto"
              >
                <Avatar className="w-32 h-32 mb-4">
                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                </Avatar>
                <div className="font-semibold">{member.name}</div>
                <div className="text-muted-foreground text-sm">
                  {member.role}
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-2 text-blue-600 hover:underline text-xs justify-center"
                  >
                    <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
        <h2 className="font-display text-2xl mb-6 text-center">Core Team</h2>
        <div className="flex justify-center mb-12">
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-5">
            {volunteers.map((vol) => (
              <Card
                key={vol.name}
                className="flex flex-col items-center p-6 text-center w-full max-w-xs mx-auto"
              >
                <Avatar className="w-28 h-28 mb-4">
                  <img src={vol.photo} alt={vol.name} className="h-full w-full object-cover" />
                </Avatar>
                <div className="font-semibold">{vol.name}</div>
                <div className="text-muted-foreground text-sm">{vol.role}</div>
                {vol.linkedin && (
                  <a
                    href={vol.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-2 text-blue-600 hover:underline text-xs justify-center"
                  >
                    <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
