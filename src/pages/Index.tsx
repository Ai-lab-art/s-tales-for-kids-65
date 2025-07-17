import { Button } from "@/components/ui/button";
import { Facebook, Twitter, MessageCircle, Share2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/homepage-hero.jpg";

const Index = () => {
  const shareUrl = window.location.href;
  const shareText = "Check out these amazing magical stories for children!";
  
  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'messenger':
        url = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cover Image */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm mb-4 opacity-90">Developed by: Hom Bahadur Thapa</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-story-accent bg-clip-text text-transparent">
            Magical Stories for Children
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover wonderful tales filled with adventure, friendship, and important life lessons
          </p>
          
          {/* Start Button */}
          <Link to="/stories">
            <Button 
              size="lg"
              className="bg-story-primary hover:bg-story-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-story-primary/50 transition-all duration-300 hover:scale-105 mb-8"
            >
              Start Reading Adventures
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          {/* Share Buttons */}
          <div className="flex justify-center items-center gap-3">
            <span className="text-sm opacity-75 mr-2">Share:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('facebook')}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('twitter')}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('whatsapp')}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('messenger')}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
