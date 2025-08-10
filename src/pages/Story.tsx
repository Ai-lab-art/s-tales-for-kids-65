import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { stories } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, ChevronLeft, ChevronRight, Languages, Volume2, StopCircle } from "lucide-react";

export default function Story() {
  const { id } = useParams();
  const storyId = parseInt(id || "1");
  const story = stories.find((s) => s.id === storyId);
  const [isNepali, setIsNepali] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-story-secondary/20 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Story not found</h1>
          <Link to="/">
            <Button>Go back home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const prevStory = stories.find((s) => s.id === storyId - 1);
  const nextStory = stories.find((s) => s.id === storyId + 1);

  const getStoryText = () => {
    const title = isNepali ? story.titleNepali : story.title;
    const moral = isNepali ? story.moralNepali : story.moral;
    const content = (isNepali ? story.contentNepali : story.content).split("\n\n").join(" ");
    return `${title}. ${moral}. ${content}`;
  };

  const startSpeaking = () => {
    try {
      const text = getStoryText();
      if (!text) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = isNepali ? "ne-NP" : "en-US";
      utter.rate = 1;
      utter.pitch = 1;
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(isNepali ? "ne" : "en"));
      if (preferred) utter.voice = preferred;
      utter.onend = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
      };
      utter.onerror = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
      };
      utteranceRef.current = utter;
      window.speechSynthesis.speak(utter);
      setIsSpeaking(true);
    } catch (e) {
      setIsSpeaking(false);
    }
  };

  const toggleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      utteranceRef.current = null;
    } else {
      startSpeaking();
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      startSpeaking();
    }
  }, [isNepali]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-story-secondary/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-story-secondary/30 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-story-secondary/30">
                <ArrowLeft className="w-4 h-4" />
                Back to Stories
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsNepali(!isNepali)}
                className="flex items-center gap-2 hover:bg-story-secondary/30"
              >
                <Languages className="w-4 h-4" />
                {isNepali ? "English" : "नेपाली"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSpeak}
                className="flex items-center gap-2 hover:bg-story-secondary/30"
                aria-label={isSpeaking ? "Stop reading" : "Listen to story"}
              >
                {isSpeaking ? <StopCircle className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                {isSpeaking ? "Stop" : "Listen"}
              </Button>

              <Link to="/">
                <Button variant="ghost" size="sm" className="hover:bg-story-secondary/30">
                  <Home className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl">
          {/* Story Image */}
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <CardContent className="p-8">
            {/* Title and Moral */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {isNepali ? story.titleNepali : story.title}
              </h1>
              <div className="inline-block p-4 bg-gradient-to-r from-story-warm/40 to-story-accent/40 rounded-2xl">
                <p className="text-lg font-medium text-story-primary">
                  ✨ {isNepali ? story.moralNepali : story.moral}
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="prose prose-lg max-w-none">
              {(isNepali ? story.contentNepali : story.content).split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          {prevStory ? (
            <Link to={`/story/${prevStory.id}`}>
              <Button className="bg-story-accent hover:bg-story-accent/90 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous Story
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {nextStory ? (
            <Link to={`/story/${nextStory.id}`}>
              <Button className="bg-story-primary hover:bg-story-primary/90 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                Next Story
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}