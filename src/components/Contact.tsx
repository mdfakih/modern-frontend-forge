import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useAnimations } from '../hooks/useAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const { elementRef: sectionRef, animate: sectionAnimate } =
    useAnimations<HTMLElement>();
  const { elementRef: titleRef, animate: titleAnimate } =
    useAnimations<HTMLDivElement>();
  const { elementRef: infoRef, animate: infoAnimate } =
    useAnimations<HTMLDivElement>();
  const { elementRef: formRef, animate: formAnimate } =
    useAnimations<HTMLDivElement>();
  const contactItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const socialButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formElementRef = useRef<HTMLFormElement>(null);

  // Google Apps Script URL - Replace with your deployed script URL
  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyTddwfRD_8q-CIjyi2J1RxnZ0KKlRyvnI--5Xfkp-thkXMgXf5ZjK8lo4vzC1vuS7p/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.result === 'success') {
        toast.success('Message sent successfully!');
        if (formElementRef.current) {
          formElementRef.current.reset();
        }
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // ... existing animation code ...
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-muted/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Let's <span className="gradient-text" style={{ fontFamily: 'ProtestRiot, sans-serif' }}>Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life with precision and
            expertise. Let's discuss how we can build something amazing
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            ref={infoRef}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you need a data-driven web application or want
                to discuss your next big idea, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">mf9049@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 9028435660</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Bhiwandi, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform"
              >
                <a
                  href="https://github.com/mdfakih"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform"
              >
                <a
                  href="https://linkedin.com/in/mohammed-husain-fakih"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform"
              >
                <a href="mailto:mf9049@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card ref={formRef}>
            <CardContent className="p-8">
              <form
                ref={formElementRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
