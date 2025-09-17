import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const quickLinks = [
    { label: "How it Works", href: "#" },
    { label: "Why Us", href: "#" },
    { label: "Who Uses this", href: "#" },
    { label: "Security", href: "#" },
    { label: "Use Cases", href: "#" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Data Sources", href: "#" },
    { label: "Compliance", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg leading-tight">DEADBEAT</div>
                <div className="font-bold text-gray-900 text-sm leading-tight">DETECTIVE</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 rounded-full border-gray-300 hover:bg-gray-100"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <IconComponent className="w-4 h-4 text-gray-600" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  943, Apple Lane Peoria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  +1 - 202 - 555 - 0153
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  tapnav@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}