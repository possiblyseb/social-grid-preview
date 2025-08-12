import { useState, useEffect } from 'react';
import { SocialGridPreview } from 'react-social-grid-preview';
import type { SocialGridData } from 'react-social-grid-preview';
import './App.css';
import 'react-social-grid-preview/dist/index.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample data
const sampleData: SocialGridData = {
  configuration: {
    instagram: [
      {
        id: 'ig-1',
        platform: 'instagram',
        username: 'mybrand',
        displayName: 'My Brand',
        profileImage: 'https://via.placeholder.com/100x100/4A90E2/FFFFFF?text=MB',
        followers: 15000,
        following: 250,
        posts: 89,
        verified: true,
      }
    ],
    tiktok: [
      {
        id: 'tt-1',
        platform: 'tiktok',
        username: 'mybrand_official',
        displayName: 'My Brand Official',
        profileImage: 'https://via.placeholder.com/100x100/FF6B9D/FFFFFF?text=MB',
        followers: 25000,
        following: 180,
        posts: 156,
        verified: true,
      }
    ],
    youtube: [
      {
        id: 'yt-1',
        platform: 'youtube',
        username: 'MyBrandChannel',
        displayName: 'My Brand Channel',
        profileImage: 'https://via.placeholder.com/100x100/FF4444/FFFFFF?text=MB',
        followers: 8500, // subscribers
        following: 45,
        posts: 32, // videos
        verified: true,
      }
    ]
  },
  posts: [
    {
      id: 'post-1',
      content: {
        id: 'content-1',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/F39C12/FFFFFF?text=Post+1',
        caption: 'Check out our new product launch! 🚀 #newproduct #launch',
        hashtags: ['newproduct', 'launch']
      },
      accounts: ['ig-1', 'tt-1']
    },
    {
      id: 'post-2',
      content: {
        id: 'content-2',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/E74C3C/FFFFFF?text=Video+1',
        caption: 'Behind the scenes of our latest campaign',
        hashtags: ['behindthescenes', 'campaign']
      },
      accounts: ['ig-1', 'yt-1']
    },
    {
      id: 'post-3',
      content: {
        id: 'content-3',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/9B59B6/FFFFFF?text=Post+2',
        caption: 'Team collaboration at its finest ✨',
        hashtags: ['team', 'collaboration']
      },
      accounts: ['ig-1']
    },
    {
      id: 'post-4',
      content: {
        id: 'content-4',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/1ABC9C/FFFFFF?text=Video+2',
        caption: 'Tutorial: How to use our product',
        hashtags: ['tutorial', 'howto']
      },
      accounts: ['tt-1', 'yt-1']
    },
    {
      id: 'post-5',
      content: {
        id: 'content-5',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/34495E/FFFFFF?text=Post+3',
        caption: 'Customer testimonial spotlight 💫',
        hashtags: ['testimonial', 'customer']
      },
      accounts: ['ig-1', 'tt-1']
    },
    {
      id: 'post-6',
      content: {
        id: 'content-6',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/E67E22/FFFFFF?text=Post+4',
        caption: 'Product feature highlight',
        hashtags: ['product', 'features']
      },
      accounts: ['ig-1']
    },
    {
      id: 'post-7',
      content: {
        id: 'content-7',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/3498DB/FFFFFF?text=Video+3',
        caption: 'Weekly vlog: Day in the life at the office 📹',
        hashtags: ['vlog', 'office', 'daily']
      },
      accounts: ['yt-1', 'tt-1']
    },
    {
      id: 'post-8',
      content: {
        id: 'content-8',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/2ECC71/FFFFFF?text=Post+5',
        caption: 'Sustainability initiative announcement 🌱',
        hashtags: ['sustainability', 'green', 'environment']
      },
      accounts: ['ig-1', 'tt-1']
    },
    {
      id: 'post-9',
      content: {
        id: 'content-9',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/E91E63/FFFFFF?text=Post+6',
        caption: 'Employee spotlight: Meet our amazing team! 👥',
        hashtags: ['team', 'employee', 'spotlight']
      },
      accounts: ['ig-1']
    },
    {
      id: 'post-10',
      content: {
        id: 'content-10',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/FF5722/FFFFFF?text=Video+4',
        caption: 'Quick tips for maximizing productivity 💡',
        hashtags: ['productivity', 'tips', 'workflow']
      },
      accounts: ['yt-1', 'ig-1']
    },
    {
      id: 'post-11',
      content: {
        id: 'content-11',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/795548/FFFFFF?text=Post+7',
        caption: 'Throwback to our company retreat 🏔️',
        hashtags: ['throwback', 'retreat', 'memories']
      },
      accounts: ['ig-1', 'tt-1']
    },
    {
      id: 'post-12',
      content: {
        id: 'content-12',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/607D8B/FFFFFF?text=Video+5',
        caption: 'Industry insights and market trends 📊',
        hashtags: ['insights', 'trends', 'market']
      },
      accounts: ['yt-1']
    },
    {
      id: 'post-13',
      content: {
        id: 'content-13',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/FFC107/FFFFFF?text=Post+8',
        caption: 'Community event highlights ✨',
        hashtags: ['community', 'event', 'highlights']
      },
      accounts: ['ig-1', 'tt-1']
    },
    {
      id: 'post-14',
      content: {
        id: 'content-14',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/8BC34A/FFFFFF?text=Post+9',
        caption: 'Innovation showcase: What we\'re working on 🔬',
        hashtags: ['innovation', 'showcase', 'development']
      },
      accounts: ['ig-1']
    },
    {
      id: 'post-15',
      content: {
        id: 'content-15',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/FF9800/FFFFFF?text=Video+6',
        caption: 'Customer success story walkthrough 🎯',
        hashtags: ['success', 'customer', 'story']
      },
      accounts: ['yt-1', 'tt-1']
    },
    {
      id: 'post-16',
      content: {
        id: 'content-16',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/CDDC39/FFFFFF?text=Post+10',
        caption: 'Partnership announcement with industry leaders 🤝',
        hashtags: ['partnership', 'collaboration', 'leaders']
      },
      accounts: ['ig-1', 'tt-1']
    },
    {
      id: 'post-17',
      content: {
        id: 'content-17',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/00BCD4/FFFFFF?text=Video+7',
        caption: 'Live Q&A session recap 💬',
        hashtags: ['qa', 'live', 'recap']
      },
      accounts: ['yt-1', 'ig-1']
    },
    {
      id: 'post-18',
      content: {
        id: 'content-18',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/9C27B0/FFFFFF?text=Post+11',
        caption: 'Awards and recognition ceremony 🏆',
        hashtags: ['awards', 'recognition', 'achievement']
      },
      accounts: ['ig-1']
    },
    {
      id: 'post-19',
      content: {
        id: 'content-19',
        type: 'video',
        url: 'https://via.placeholder.com/400x400/F44336/FFFFFF?text=Video+8',
        caption: 'Year-end review and future plans 🚀',
        hashtags: ['review', 'plans', 'future']
      },
      accounts: ['yt-1', 'tt-1']
    },
    {
      id: 'post-20',
      content: {
        id: 'content-20',
        type: 'image',
        url: 'https://via.placeholder.com/400x400/4CAF50/FFFFFF?text=Post+12',
        caption: 'Thank you to our amazing community! ❤️',
        hashtags: ['thankyou', 'community', 'appreciation']
      },
      accounts: ['ig-1', 'tt-1', 'yt-1']
    }
  ]
};

function App() {
  const [selectedAccountId, setSelectedAccountId] = useState<string>('ig-1');
  const [showAccountSwitcher, setShowAccountSwitcher] = useState(true);
  const [showPhoneOutline, setShowPhoneOutline] = useState(true);
  const [phoneType, setPhoneType] = useState<'iphone' | 'android'>('iphone');
  const [forcePlatform, setForcePlatform] = useState<'instagram' | 'tiktok' | 'youtube' | undefined>(undefined);
  
  // Initialize dark mode - start with light mode for testing
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-foreground">
          Social Grid Preview Demo
        </h1>
        
        {/* Controls */}
        <Card className="max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Checkboxes Row */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="dark-mode"
                    checked={isDarkMode}
                    onCheckedChange={(checked) => setIsDarkMode(checked === true)}
                  />
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="account-switcher"
                    checked={showAccountSwitcher}
                    onCheckedChange={(checked) => setShowAccountSwitcher(checked === true)}
                  />
                  <Label htmlFor="account-switcher">Show Account Switcher</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="phone-outline"
                    checked={showPhoneOutline}
                    onCheckedChange={(checked) => setShowPhoneOutline(checked === true)}
                  />
                  <Label htmlFor="phone-outline">Show Phone Outline</Label>
                </div>
              </div>
              
              {/* Dropdowns Row */}
              <div className="flex flex-wrap gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone-type">Phone Type</Label>
                  <Select value={phoneType} onValueChange={(value: 'iphone' | 'android') => setPhoneType(value)}>
                    <SelectTrigger id="phone-type">
                      <SelectValue placeholder="Select phone type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iphone">iPhone</SelectItem>
                      <SelectItem value="android">Android</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="force-platform">Force Platform</Label>
                  <Select value={forcePlatform || 'auto'} onValueChange={(value) => setForcePlatform(value === 'auto' ? undefined : value as any)}>
                    <SelectTrigger id="force-platform">
                      <SelectValue placeholder="Auto (from account)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto (from account)</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Preview */}
        <div className="flex justify-center mb-8">
          <SocialGridPreview
            data={sampleData}
            showAccountSwitcher={showAccountSwitcher}
            showPhoneOutline={showPhoneOutline}
            phoneType={phoneType}
            forcePlatform={forcePlatform}
            selectedAccountId={selectedAccountId}
            onAccountChange={setSelectedAccountId}
          />
        </div>

        {/* Data Structure Info */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Sample Data Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm text-muted-foreground">
              {JSON.stringify(sampleData, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
