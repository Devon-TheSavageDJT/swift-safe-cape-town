import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Users, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Dedicated to improving the lives of seniors across South Africa with over 15 years in healthcare technology."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      description: "Ensures our emergency response systems operate flawlessly 24/7, bringing peace of mind to families."
    },
    {
      name: "Dr. Nomsa Mthembu",
      role: "Medical Advisor",
      description: "Provides clinical expertise to ensure our devices meet the highest safety and health standards."
    },
    {
      name: "James Williams",
      role: "Technical Director",
      description: "Leads our technology team to develop reliable, user-friendly emergency response solutions."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "We prioritize the physical and emotional safety of every client, ensuring reliable protection when it matters most."
    },
    {
      icon: Heart,
      title: "Respect",
      description: "We treat every client with dignity and respect, understanding their unique needs and circumstances."
    },
    {
      icon: Users,
      title: "Independence",
      description: "We empower seniors to maintain their independence while providing the security they need."
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Our commitment to consistent, dependable service has earned the trust of families across South Africa."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Swift Response
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Swift Response, our passion is helping South Africa's elderly regain their independence and peace of mind. 
            We believe that age should never limit one's ability to live confidently and safely.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Empowering Seniors</h3>
                <p className="text-muted-foreground mb-6">
                  We provide discreet, reliable emergency devices that allow seniors to maintain their independence 
                  while ensuring help is always just a button press away.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Supporting Families</h3>
                <p className="text-muted-foreground">
                  We bring peace of mind to families and caregivers, knowing their loved ones are protected 
                  by our 24/7 monitoring and rapid response system.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-primary rounded-full p-8">
                  <Heart className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals committed to your safety and independence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-secondary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-primary rounded-full p-4 mx-auto mb-4 w-fit">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Stats */}
        <section className="bg-gradient-primary text-white rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">
              Proudly serving the Cape Town community since 2022
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Families Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Monitoring Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt; 5min</div>
              <div className="text-lg opacity-90">Average Response Time</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;