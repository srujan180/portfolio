import { Mail, Phone } from "lucide-react";

const Contactme = () => {
  return (
   <section id="contact" className="section-padding flex-7">
      <div className="container mx-auto text-center flex flex-col min-h-screen">
        <h2 className="text-4xl lg:text-3xl font-bold mb-16 mt-10">
          Let's <span className="gradient-text">Get in Touch</span>
        </h2>
        
        <div className="max-w-md mx-auto space-y-8">
          <div className="flex items-center justify-center space-x-4 p-6 glass-card rounded-lg hover-lift">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              
              <p className="text-muted-foreground">+91-9705351148</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 p-6 glass-card rounded-lg hover-lift">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              
              <p className="text-muted-foreground -px-10">annamsrujanreddy2002@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;