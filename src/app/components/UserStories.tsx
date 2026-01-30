import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Users, Zap, ShoppingBag, LineChart, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';

export function UserStories() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-slate-900">User Stories & Acceptance Criteria</h1>
              <p className="text-sm text-slate-500">Complete development specifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Overview */}
          <section className="bg-gradient-to-br from-[#1DB954] to-[#1ED760] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">SportsFeed Platform</h2>
            <p className="text-white/80 text-lg mb-6">
              A world-class, mobile-first sports media platform that delivers personalized content feeds 
              with AI augmentation, social sharing, and commerce integration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">18+</div>
                <div className="text-white/80 text-sm">Epic Features</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">52+</div>
                <div className="text-white/80 text-sm">User Stories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-white/80 text-sm">User Roles</div>
              </div>
            </div>
          </section>

          {/* Roles Section */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Users className="w-7 h-7 text-[#1DB954]" />
              User Roles & Responsibilities
            </h2>
            
            <div className="space-y-6">
              <RoleCard
                title="End User"
                icon={<Users className="w-6 h-6" />}
                color="blue"
                description="The primary persona consuming sports content"
                responsibilities={[
                  "Browse and discover sports articles and content",
                  "Customize preferences and personalization settings",
                  "Save, share, and engage with articles",
                  "Purchase products featured in articles",
                  "Provide implicit feedback through engagement patterns"
                ]}
                permissions={[
                  "Read all public content",
                  "Manage personal profile and preferences",
                  "Save articles to personal collection",
                  "Complete purchases through integrated commerce",
                  "Share content on social platforms"
                ]}
              />

              <RoleCard
                title="Content Editor / Publisher"
                icon={<Shield className="w-6 h-6" />}
                color="purple"
                description="Backend role responsible for content management"
                responsibilities={[
                  "Create, edit, and publish sports articles",
                  "Tag articles with sports, teams, and metadata",
                  "Upload and manage article images and media",
                  "Associate products with relevant articles",
                  "Monitor content performance and engagement"
                ]}
                permissions={[
                  "Full CRUD access to article content",
                  "Manage article metadata and categorization",
                  "Link products to articles",
                  "Access content analytics dashboard",
                  "Schedule content publication"
                ]}
              />

              <RoleCard
                title="AI System"
                icon={<Zap className="w-6 h-6" />}
                color="orange"
                description="Automated system role for content augmentation"
                responsibilities={[
                  "Generate contextual enhancements for articles",
                  "Provide real-time player statistics and comparisons",
                  "Create historical context and trend analysis",
                  "Power personalization recommendations",
                  "Generate search and discovery improvements"
                ]}
                permissions={[
                  "Read article content and metadata",
                  "Access sports data APIs and databases",
                  "Write AI-generated insights to article records",
                  "Track user engagement patterns (anonymized)",
                  "Update recommendation models"
                ]}
              />

              <RoleCard
                title="Commerce Manager"
                icon={<ShoppingBag className="w-6 h-6" />}
                color="green"
                description="Manages product catalog and commerce integration"
                responsibilities={[
                  "Maintain product catalog and inventory",
                  "Set pricing and manage promotions",
                  "Link products to relevant content",
                  "Monitor sales and conversion metrics",
                  "Handle order fulfillment coordination"
                ]}
                permissions={[
                  "Full CRUD access to product catalog",
                  "View sales and revenue analytics",
                  "Manage product-article associations",
                  "Configure payment and shipping settings",
                  "Access customer order history"
                ]}
              />

              <RoleCard
                title="Analytics Administrator"
                icon={<LineChart className="w-6 h-6" />}
                color="indigo"
                description="Monitors platform performance and user behavior"
                responsibilities={[
                  "Track user engagement and retention metrics",
                  "Monitor content performance across segments",
                  "Analyze personalization effectiveness",
                  "Generate business intelligence reports",
                  "Optimize conversion funnels"
                ]}
                permissions={[
                  "Read-only access to all platform data",
                  "Access to analytics dashboards",
                  "Export data for external analysis",
                  "Configure tracking and events",
                  "View A/B test results"
                ]}
              />
            </div>
          </section>

          {/* User Stories - Onboarding */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 1: Onboarding & Personalization</h2>
            
            <UserStory
              id="US-1.1"
              role="End User"
              goal="complete an engaging onboarding experience"
              benefit="I can quickly set up my personalized sports feed"
              priority="Critical"
              acceptanceCriteria={[
                "Welcome screen displays app logo, tagline, and value proposition",
                "Clear 'Get Started' CTA button is prominently displayed",
                "Animations and transitions create engaging first impression",
                "Users can skip onboarding if they choose",
                "Progress is preserved if user returns later"
              ]}
              technicalNotes="Use motion/react for smooth animations. Store progress in localStorage for session recovery."
            />

            <UserStory
              id="US-1.2"
              role="End User"
              goal="select my favorite sports"
              benefit="I see content relevant to the sports I care about"
              priority="Critical"
              acceptanceCriteria={[
                "Display grid of at least 6 major sports with icons",
                "Support multi-select with visual feedback (selected state)",
                "Require minimum of 1 sport selection to proceed",
                "Show selection count indicator",
                "Provide 'Continue' button that activates when minimum met"
              ]}
              technicalNotes="Store selections in UserContext. Validate minimum selection before navigation."
            />

            <UserStory
              id="US-1.3"
              role="End User"
              goal="follow specific teams"
              benefit="I receive targeted content about teams I'm passionate about"
              priority="High"
              acceptanceCriteria={[
                "Display teams filtered by previously selected sports",
                "Show team logos and names clearly",
                "Support search/filter functionality for large team lists",
                "Allow selection of 3-10 teams with counter",
                "Persist team selections to user profile"
              ]}
              technicalNotes="Filter teams based on sport selections. Implement debounced search."
            />

            <UserStory
              id="US-1.4"
              role="End User"
              goal="set notification preferences during onboarding"
              benefit="I can control how and when I receive updates"
              priority="Medium"
              acceptanceCriteria={[
                "Present clear options for notification types (breaking news, scores, personalized)",
                "Use toggle switches for easy on/off control",
                "Explain what each notification type includes",
                "Allow users to skip notifications setup",
                "Store preferences and respect them system-wide"
              ]}
              technicalNotes="Store in UserContext and localStorage. Prepare for future push notification integration."
            />

            <UserStory
              id="US-1.5"
              role="End User"
              goal="modify my preferences after initial setup"
              benefit="I can adjust my personalization as interests evolve"
              priority="High"
              acceptanceCriteria={[
                "Access preferences from profile/settings page",
                "Edit sports, teams, and notification settings",
                "See changes reflected immediately in feed",
                "Reset to defaults option available",
                "Changes persist across sessions"
              ]}
              technicalNotes="Reuse onboarding components in settings view. Trigger feed refresh on preference update."
            />
          </section>

          {/* User Stories - Content Feed */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 2: Content Feed & Discovery</h2>
            
            <UserStory
              id="US-2.1"
              role="End User"
              goal="view a personalized feed of sports articles"
              benefit="I discover relevant content without manual searching"
              priority="Critical"
              acceptanceCriteria={[
                "Feed displays articles in card format with image, title, excerpt, metadata",
                "Articles are ordered by relevance and recency",
                "'For You' filter shows content matching user preferences",
                "Infinite scroll or pagination for browsing",
                "Loading states and skeleton screens for performance perception"
              ]}
              technicalNotes="Implement useMemo for filter performance. Use IntersectionObserver for lazy loading."
            />

            <UserStory
              id="US-2.2"
              role="End User"
              goal="filter content by sport, team, or content type"
              benefit="I can quickly find specific content I'm looking for"
              priority="High"
              acceptanceCriteria={[
                "Horizontal scrolling filter bar with all sports",
                "Quick filters: All, For You, Trending, Saved",
                "Active filter state is visually distinct",
                "Filter results update immediately",
                "Filter selection persists during session"
              ]}
              technicalNotes="Use controlled state for active filter. Implement horizontal scroll with CSS overflow."
            />

            <UserStory
              id="US-2.3"
              role="End User"
              goal="search for articles by keyword"
              benefit="I can find specific topics, players, or events"
              priority="High"
              acceptanceCriteria={[
                "Search bar prominently placed in header",
                "Real-time filtering as user types",
                "Search across title, excerpt, and tags",
                "Clear search results count displayed",
                "Empty state when no results found"
              ]}
              technicalNotes="Debounce search input (300ms). Search algorithm should be case-insensitive."
            />

            <UserStory
              id="US-2.4"
              role="End User"
              goal="see trending and breaking news prominently"
              benefit="I stay updated on the most important sports events"
              priority="High"
              acceptanceCriteria={[
                "Trending articles marked with indicator badge",
                "'Trending' filter shows only trending content",
                "Breaking news articles appear at top of feed",
                "Visual differentiation for breaking content (border, badge, etc.)",
                "Trending calculation based on engagement metrics"
              ]}
              technicalNotes="Add 'trending' and 'breaking' boolean flags to article schema."
            />

            <UserStory
              id="US-2.5"
              role="End User"
              goal="save articles to read later"
              benefit="I can curate a personal collection for convenient access"
              priority="Medium"
              acceptanceCriteria={[
                "Bookmark icon on each article card",
                "Toggle save/unsave with visual feedback",
                "'Saved' filter shows only bookmarked articles",
                "Saved state persists across sessions",
                "Access saved articles from profile"
              ]}
              technicalNotes="Store saved article IDs in UserContext and localStorage. Sync with backend when available."
            />

            <UserStory
              id="US-2.6"
              role="End User"
              goal="share articles on social media"
              benefit="I can engage my network with interesting sports content"
              priority="Medium"
              acceptanceCriteria={[
                "Share button on article cards and detail pages",
                "Support sharing to Twitter, Facebook, LinkedIn, WhatsApp",
                "Copy link option available",
                "Pre-populated share text includes article title",
                "Share analytics tracked (if applicable)"
              ]}
              technicalNotes="Use Web Share API with fallback to custom modal. Track share events."
            />
          </section>

          {/* User Stories - AI Augmentation */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 3: AI Content Augmentation</h2>
            
            <UserStory
              id="US-3.1"
              role="End User"
              goal="access AI-generated contextual information alongside articles"
              benefit="I gain deeper understanding without leaving the article"
              priority="High"
              acceptanceCriteria={[
                "AI panel toggle button visible on article detail page",
                "Smooth slide-in/out animation for AI panel",
                "AI content clearly labeled and visually distinct",
                "Panel doesn't obstruct main article content",
                "Works seamlessly on mobile and desktop"
              ]}
              technicalNotes="Use motion/react for panel animations. Implement side panel on desktop, bottom sheet on mobile."
            />

            <UserStory
              id="US-3.2"
              role="End User"
              goal="view real-time player statistics and comparisons"
              benefit="I understand player performance in numerical context"
              priority="High"
              acceptanceCriteria={[
                "Display key stats in easily scannable format",
                "Include season averages, recent performance, career highlights",
                "Visual charts/graphs for statistical trends",
                "Compare up to 2 players side-by-side",
                "Data updates reflect current season"
              ]}
              technicalNotes="Use recharts for data visualization. Mock stats with realistic ranges."
            />

            <UserStory
              id="US-3.3"
              role="End User"
              goal="see historical context and trends"
              benefit="I appreciate the significance of current events"
              priority="Medium"
              acceptanceCriteria={[
                "Historical comparisons to past seasons/games",
                "Trend analysis (improving, declining, consistent)",
                "Relevant milestone information",
                "Historical records and achievements",
                "Timeline visualization when applicable"
              ]}
              technicalNotes="Generate contextual historical data in AI service layer."
            />

            <UserStory
              id="US-3.4"
              role="End User"
              goal="understand complex plays or strategies"
              benefit="I learn more about the sport while staying informed"
              priority="Low"
              acceptanceCriteria={[
                "Plain-language explanations of technical concepts",
                "Visual diagrams for play breakdowns (when applicable)",
                "Glossary terms linked or defined inline",
                "Difficulty levels (beginner, advanced) when relevant",
                "Educational content doesn't condescend"
              ]}
              technicalNotes="Create reusable explanation components. Build glossary database."
            />

            <UserStory
              id="US-3.5"
              role="AI System"
              goal="analyze article content and generate relevant insights"
              benefit="users receive valuable context automatically"
              priority="High"
              acceptanceCriteria={[
                "NLP extraction of key entities (players, teams, stats)",
                "Insight generation completes within 2 seconds",
                "Insights are factually accurate and relevant",
                "Fallback gracefully if AI service unavailable",
                "Cache insights to avoid redundant generation"
              ]}
              technicalNotes="Mock AI service for prototype. Prepare integration points for OpenAI/Anthropic."
            />

            <UserStory
              id="US-3.6"
              role="End User"
              goal="receive personalized article recommendations"
              benefit="I discover content aligned with my interests"
              priority="Medium"
              acceptanceCriteria={[
                "Recommendation engine considers user preferences and history",
                "'For You' feed uses ML-based ranking",
                "Recommendations balance familiarity and discovery",
                "Diversity in recommended content (not just one sport/team)",
                "Recommendations improve over time with engagement"
              ]}
              technicalNotes="Implement collaborative filtering algorithm. Track engagement metrics (time, saves, shares)."
            />
          </section>

          {/* User Stories - Article Reading */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 4: Article Reading Experience</h2>
            
            <UserStory
              id="US-4.1"
              role="End User"
              goal="read articles in an immersive, distraction-free layout"
              benefit="I can focus on content without clutter"
              priority="Critical"
              acceptanceCriteria={[
                "Clean typography optimized for readability",
                "Full-width hero image with proper aspect ratio",
                "Optimal line length (45-75 characters)",
                "Adequate spacing and whitespace",
                "Mobile-first responsive design"
              ]}
              technicalNotes="Use system fonts for performance. Ensure minimum 16px body text on mobile."
            />

            <UserStory
              id="US-4.2"
              role="End User"
              goal="see article metadata (author, date, read time, source)"
              benefit="I can assess credibility and relevance"
              priority="Medium"
              acceptanceCriteria={[
                "Author name and publication date clearly displayed",
                "Estimated read time shown (calculated from word count)",
                "Original source attribution if aggregated",
                "Share and save actions easily accessible",
                "View count or engagement metrics (optional)"
              ]}
              technicalNotes="Calculate read time at ~200 words per minute. Format dates using relative time."
            />

            <UserStory
              id="US-4.3"
              role="End User"
              goal="navigate back to feed easily"
              benefit="I can continue browsing without friction"
              priority="High"
              acceptanceCriteria={[
                "Back button in header (top-left)",
                "Browser back button works correctly",
                "Feed state preserved when returning",
                "Scroll position maintained in feed",
                "Smooth page transitions"
              ]}
              technicalNotes="Use React Router for navigation. Implement scroll restoration."
            />

            <UserStory
              id="US-4.4"
              role="End User"
              goal="view embedded media (images, videos) within articles"
              benefit="I get complete story with visual context"
              priority="Medium"
              acceptanceCriteria={[
                "Images load progressively with placeholders",
                "Responsive images sized appropriately",
                "Video players with standard controls",
                "Captions displayed beneath media",
                "Lazy loading for performance"
              ]}
              technicalNotes="Use ImageWithFallback component. Implement lazy loading with IntersectionObserver."
            />

            <UserStory
              id="US-4.5"
              role="End User"
              goal="see related articles at the end of content"
              benefit="I discover more content I'm likely to enjoy"
              priority="Low"
              acceptanceCriteria={[
                "3-6 related articles displayed",
                "Relation based on sport, teams, or tags",
                "Same card format as main feed",
                "Clicking navigates to that article",
                "Refreshes with each new article"
              ]}
              technicalNotes="Implement similarity algorithm based on shared tags/teams."
            />
          </section>

          {/* User Stories - Commerce */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 5: Commerce Integration</h2>
            
            <UserStory
              id="US-5.1"
              role="End User"
              goal="discover products contextually placed within articles"
              benefit="I can purchase relevant merchandise naturally"
              priority="High"
              acceptanceCriteria={[
                "Products displayed in dedicated section within articles",
                "Clear product images, names, and prices",
                "Visual distinction from editorial content",
                "Relevant products matched to article context",
                "Non-intrusive placement that doesn't disrupt reading"
              ]}
              technicalNotes="Create FeaturedProducts component. Place after first 2-3 paragraphs or at article end."
            />

            <UserStory
              id="US-5.2"
              role="End User"
              goal="view product details without leaving the article"
              benefit="I can make informed purchase decisions quickly"
              priority="Medium"
              acceptanceCriteria={[
                "Product quick-view modal or drawer",
                "Display full product description and images",
                "Show price, sizes, and availability",
                "Option to add to cart or purchase",
                "Close button returns to article seamlessly"
              ]}
              technicalNotes="Implement modal with focus trap. Use motion/react for smooth animations."
            />

            <UserStory
              id="US-5.3"
              role="End User"
              goal="add products to cart and complete checkout"
              benefit="I can purchase items I discover"
              priority="Medium"
              acceptanceCriteria={[
                "Add to cart with visual confirmation",
                "Cart icon shows item count",
                "View cart summary with all items",
                "Checkout flow with shipping and payment",
                "Order confirmation after purchase"
              ]}
              technicalNotes="Use Context for cart state. Mock checkout for prototype (Stripe integration ready)."
            />

            <UserStory
              id="US-5.4"
              role="Commerce Manager"
              goal="associate products with relevant articles"
              benefit="users see contextually appropriate merchandise"
              priority="High"
              acceptanceCriteria={[
                "CMS interface to link products to articles",
                "Search products by name, category, or team",
                "Preview how products appear in article",
                "Set primary vs. secondary product placement",
                "Analytics on product impressions and clicks"
              ]}
              technicalNotes="Build admin interface with product search and linking. Track commerce events."
            />

            <UserStory
              id="US-5.5"
              role="End User"
              goal="see personalized product recommendations"
              benefit="I discover merchandise for my favorite teams"
              priority="Low"
              acceptanceCriteria={[
                "Products filtered by user's team preferences",
                "Recommended products section in profile",
                "Best-sellers for followed teams highlighted",
                "New arrivals for preferred sports shown",
                "Purchase history influences recommendations (future)"
              ]}
              technicalNotes="Filter products by user preferences. Implement recommendation scoring."
            />
          </section>

          {/* User Stories - Profile & Settings */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 6: Profile & Settings</h2>
            
            <UserStory
              id="US-6.1"
              role="End User"
              goal="view and edit my profile information"
              benefit="I can manage my account details"
              priority="Medium"
              acceptanceCriteria={[
                "Display current user name and avatar",
                "Edit name, email, and avatar",
                "Save changes with confirmation",
                "Validation for required fields",
                "Changes reflected across app immediately"
              ]}
              technicalNotes="Store user profile in UserContext. Validate email format."
            />

            <UserStory
              id="US-6.2"
              role="End User"
              goal="manage my sports and team preferences"
              benefit="I can update my interests as they change"
              priority="High"
              acceptanceCriteria={[
                "View currently selected sports and teams",
                "Add or remove sports with visual feedback",
                "Add or remove teams with search",
                "Changes update feed immediately",
                "Minimum validation (at least 1 sport)"
              ]}
              technicalNotes="Reuse onboarding selection components. Trigger feed refresh."
            />

            <UserStory
              id="US-6.3"
              role="End User"
              goal="control notification preferences"
              benefit="I receive updates according to my preferences"
              priority="Medium"
              acceptanceCriteria={[
                "Toggle notifications on/off globally",
                "Granular controls for notification types",
                "Test notification button",
                "Explanation of each notification type",
                "Settings persist across sessions"
              ]}
              technicalNotes="Prepare for push notification API. Currently store preferences only."
            />

            <UserStory
              id="US-6.4"
              role="End User"
              goal="view my saved articles collection"
              benefit="I can access my reading list anytime"
              priority="Medium"
              acceptanceCriteria={[
                "Saved articles section in profile",
                "Display in same card format as feed",
                "Unsave option available",
                "Sort by date saved (newest first)",
                "Empty state if no saved articles"
              ]}
              technicalNotes="Filter articles by saved IDs from UserContext."
            />

            <UserStory
              id="US-6.5"
              role="End User"
              goal="access product vision and documentation"
              benefit="I understand the platform's purpose and features"
              priority="Low"
              acceptanceCriteria={[
                "Product vision page accessible from profile",
                "Clear explanation of app features",
                "User personas and use cases",
                "Growth features and roadmap",
                "Professional, engaging presentation"
              ]}
              technicalNotes="Create dedicated ProductVision component with comprehensive content."
            />

            <UserStory
              id="US-6.6"
              role="End User"
              goal="log out or manage account settings"
              benefit="I can control my account security and privacy"
              priority="Low"
              acceptanceCriteria={[
                "Clear logout button in settings",
                "Account deletion option with confirmation",
                "Privacy settings (future)",
                "Data export option (future)",
                "Confirmation dialogs for destructive actions"
              ]}
              technicalNotes="Reset UserContext on logout. Prepare for authentication integration."
            />
          </section>

          {/* User Stories - Performance & Technical */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 7: Performance & Technical Excellence</h2>
            
            <UserStory
              id="US-7.1"
              role="End User"
              goal="experience fast page loads and smooth interactions"
              benefit="I enjoy using the app without frustration"
              priority="Critical"
              acceptanceCriteria={[
                "Initial page load under 2 seconds on 4G",
                "Smooth 60fps animations and transitions",
                "No layout shift during page load",
                "Images load progressively",
                "Interactions respond within 100ms"
              ]}
              technicalNotes="Implement code splitting, lazy loading, and image optimization. Use React.memo for expensive components."
            />

            <UserStory
              id="US-7.2"
              role="End User"
              goal="use the app seamlessly on any device"
              benefit="I have consistent experience across mobile, tablet, desktop"
              priority="Critical"
              acceptanceCriteria={[
                "Mobile-first responsive design",
                "Touch-friendly interactive elements (min 44px)",
                "Adaptive layouts at breakpoints (sm, md, lg)",
                "No horizontal scrolling on any device",
                "Tested on iOS Safari, Chrome, Firefox"
              ]}
              technicalNotes="Use Tailwind responsive classes. Test on real devices."
            />

            <UserStory
              id="US-7.3"
              role="End User"
              goal="have my preferences persist across sessions"
              benefit="I don't need to reconfigure the app each visit"
              priority="High"
              acceptanceCriteria={[
                "User preferences saved to localStorage",
                "Preferences restored on app load",
                "Graceful handling if localStorage unavailable",
                "Sync to backend when user authenticates (future)",
                "No data loss on browser refresh"
              ]}
              technicalNotes="Implement localStorage sync in UserContext. Add error boundaries."
            />

            <UserStory
              id="US-7.4"
              role="End User"
              goal="receive helpful error messages when issues occur"
              benefit="I understand what went wrong and how to proceed"
              priority="Medium"
              acceptanceCriteria={[
                "User-friendly error messages (not technical jargon)",
                "Suggested actions to resolve issues",
                "Toast notifications for transient errors",
                "Error boundaries for component failures",
                "Fallback UI for failed data loads"
              ]}
              technicalNotes="Implement error boundaries. Create error message component library."
            />

            <UserStory
              id="US-7.5"
              role="Developer"
              goal="work with clean, maintainable code"
              benefit="the platform can scale and evolve efficiently"
              priority="High"
              acceptanceCriteria={[
                "Consistent component structure and naming",
                "Shared components in /components directory",
                "TypeScript for type safety",
                "Clear separation of concerns (UI, logic, data)",
                "Comprehensive code comments for complex logic"
              ]}
              technicalNotes="Follow React best practices. Use custom hooks for logic reuse."
            />
          </section>

          {/* NEW: User Stories - Advanced Filters & Navigation */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 8: Advanced Filters & Search</h2>
            
            <UserStory
              id="US-8.1"
              role="End User"
              goal="access a comprehensive filter modal with search capability"
              benefit="I can find content more precisely than basic filters allow"
              priority="High"
              acceptanceCriteria={[
                "Filter icon button in header and mobile navigation opens modal",
                "Modal displays full-screen on mobile, centered on desktop",
                "Smooth slide-up animation with spring physics",
                "Close button and backdrop click dismiss the modal",
                "Modal prevents scroll on underlying content when open"
              ]}
              technicalNotes="Use motion/react for modal animations. Implement focus trap for accessibility. Use 'overflow: hidden' on body when modal is open."
            />

            <UserStory
              id="US-8.2"
              role="End User"
              goal="search through all available sports including niche options"
              benefit="I can discover and filter by sports beyond the popular ones"
              priority="High"
              acceptanceCriteria={[
                "Search input at top of Sports filter section",
                "Real-time filtering as user types (no delay)",
                "Display popular sports by default (first 8 sports)",
                "Show all matching sports when search query is entered",
                "Clear search button (X icon) visible when query exists",
                "Search is case-insensitive and matches partial strings",
                "Empty state message when no sports match query",
                "Hint shows count of additional searchable sports (e.g., '7 more sports including Cricket, Rugby...')"
              ]}
              technicalNotes="Store extended sports list (15+ sports) including Cricket, Rugby, Volleyball, Esports, etc. Filter using Array.filter() with toLowerCase() comparison. Show popular sports when search is empty."
            />

            <UserStory
              id="US-8.3"
              role="End User"
              goal="select multiple sports with visual confirmation"
              benefit="I can filter content across several sports simultaneously"
              priority="High"
              acceptanceCriteria={[
                "Each sport displays as a card with icon and name",
                "Selected sports show green gradient border (from #1DB954 to #1ED760)",
                "Selected sports display green checkmark icon in circle",
                "Selection count shown in section header (e.g., '3 selected')",
                "'Clear' button appears when sports are selected",
                "Tap/click toggles selection on/off with animation",
                "Grid layout adapts to screen size (2 columns mobile, more on desktop)"
              ]}
              technicalNotes="Use gradient border: 'border-[#1DB954] bg-gradient-to-br from-[#1DB954]/10 to-[#1ED760]/5'. Store selected sport IDs in array state. Use motion.button for scale animation on tap."
            />

            <UserStory
              id="US-8.4"
              role="End User"
              goal="filter by content type (Text, Video, Interview)"
              benefit="I can focus on my preferred content format"
              priority="Medium"
              acceptanceCriteria={[
                "Exactly 3 content type options: Text, Video, Interview",
                "Each type shows icon, name, and description",
                "Selected types show green gradient background and checkmark",
                "Icon changes to white on green background when selected",
                "Multi-select supported (can choose multiple types)",
                "Clear all button for content type section",
                "Selection persists during session"
              ]}
              technicalNotes="Content types: { id: 'text', icon: FileText, description: 'Articles & news' }, { id: 'video', icon: Video, description: 'Highlights & clips' }, { id: 'interview', icon: Mic, description: 'Player & expert talks' }"
            />

            <UserStory
              id="US-8.5"
              role="End User"
              goal="filter for live content only"
              benefit="I can see what's happening right now"
              priority="Medium"
              acceptanceCriteria={[
                "'Live Now' toggle filter with Radio icon",
                "Red color scheme instead of green (to indicate 'live')",
                "Single toggle (on/off, not multi-select)",
                "Shows checkmark when activated",
                "Description explains it filters for live events only"
              ]}
              technicalNotes="Use red-500 color for live indicator. Store as boolean in filter state: liveOnly: boolean"
            />

            <UserStory
              id="US-8.6"
              role="End User"
              goal="see summary of active filters before applying"
              benefit="I can review my selections before submitting"
              priority="Medium"
              acceptanceCriteria={[
                "Active Filters section appears at bottom when filters selected",
                "Shows colored pills for each selected item",
                "Sports pills show icon + name in green",
                "Content type pills in blue",
                "Live filter pill in red",
                "'Clear all' button removes all selections",
                "Section hidden when no filters active"
              ]}
              technicalNotes="Conditionally render based on filter state length. Use different colors for visual distinction between filter types."
            />

            <UserStory
              id="US-8.7"
              role="End User"
              goal="apply or clear filters with clear actions"
              benefit="I can commit my selections or start over easily"
              priority="High"
              acceptanceCriteria={[
                "Footer with two buttons: 'Clear All' and 'Apply Filters'",
                "'Clear All' resets all filters to empty state",
                "'Apply Filters' button uses green gradient background",
                "Footer sticks to bottom of modal",
                "Apply Filters closes modal and updates feed",
                "Both buttons provide haptic feedback on mobile"
              ]}
              technicalNotes="Apply button: 'bg-gradient-to-r from-[#1DB954] to-[#1ED760]'. Call setShowFilterScreen(false) after applying."
            />
          </section>

          {/* NEW: User Stories - Mobile Navigation */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 9: Mobile-First Navigation</h2>
            
            <UserStory
              id="US-9.1"
              role="End User"
              goal="navigate the app using a bottom navigation bar on mobile"
              benefit="I can reach key features with my thumb without stretching"
              priority="Critical"
              acceptanceCriteria={[
                "Bottom navigation visible only on mobile devices (hidden md:hidden class)",
                "Fixed to bottom of screen (z-index 40) above all content",
                "White background with top border for distinction",
                "Safe area support for devices with bottom notch/home indicator",
                "5 navigation items: Home, Explore, Scan, Filters, Profile",
                "Each item shows icon and label text",
                "Active route highlighted in green (#1DB954)"
              ]}
              technicalNotes="Use Tailwind class 'md:hidden' to hide on desktop. Position: 'fixed bottom-0 left-0 right-0'. Add 'safe-area-bottom' class for iPhone notch support."
            />

            <UserStory
              id="US-9.2"
              role="End User"
              goal="access the AI Sports Recognition feature from an elevated center button"
              benefit="I can quickly scan images for sports content"
              priority="High"
              acceptanceCriteria={[
                "Center button (Scan) elevated above bottom bar",
                "Circular button with Camera icon",
                "Green gradient background (from #1DB954 to #1ED760)",
                "Positioned -24px above bottom bar (relative -top-6)",
                "Larger than other nav buttons (w-14 h-14)",
                "Shadow effect for elevation illusion",
                "Navigates to /image-recognition route on click",
                "Hover and active states with scale animation"
              ]}
              technicalNotes="Use 'relative -top-6' positioning. Gradient: 'bg-gradient-to-br from-[#1DB954] to-[#1ED760]'. Implement whileTap={{ scale: 0.95 }} for tactile feedback."
            />

            <UserStory
              id="US-9.3"
              role="End User"
              goal="see consistent navigation across all mobile pages"
              benefit="I have a predictable way to move through the app"
              priority="High"
              acceptanceCriteria={[
                "Bottom navigation appears on Feed, Explore, and Profile pages",
                "Current page indicated by green icon/text color",
                "Inactive pages shown in slate-600 gray",
                "Hover states on all interactive elements",
                "Navigation state persists when moving between pages",
                "Smooth page transitions when navigating"
              ]}
              technicalNotes="Each page component includes the same navigation component. Use React Router's useLocation to determine active route. Active: 'text-[#1DB954]', Inactive: 'text-slate-600'"
            />

            <UserStory
              id="US-9.4"
              role="End User"
              goal="access navigation through Desktop UI elements"
              benefit="I have appropriate navigation for larger screens"
              priority="Medium"
              acceptanceCriteria={[
                "Bottom navigation hidden on desktop (md:hidden)",
                "Desktop shows floating Camera button (bottom-right)",
                "Camera button larger on desktop (w-16 h-16)",
                "Desktop button has same gradient and shadow",
                "Settings icon accessible from header on desktop",
                "Desktop navigation uses header links instead of bottom bar"
              ]}
              technicalNotes="Desktop floating button: 'md:flex hidden fixed bottom-6 right-6'. Mobile bottom nav: 'md:hidden fixed bottom-0'"
            />

            <UserStory
              id="US-9.5"
              role="Developer"
              goal="implement navigation with React Router"
              benefit="navigation is SEO-friendly and supports browser history"
              priority="High"
              acceptanceCriteria={[
                "Use React Router's <Link> or navigate() for all navigation",
                "Browser back/forward buttons work correctly",
                "URL changes reflect current route",
                "Deep linking supported (can share specific page URLs)",
                "No full page reloads when navigating"
              ]}
              technicalNotes="Import useNavigate from 'react-router'. Call navigate('/route') in onClick handlers. Use <Link to='/route'> for semantic links."
            />
          </section>

          {/* NEW: User Stories - AI Sports Recognition */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 10: AI Sports Recognition</h2>
            
            <UserStory
              id="US-10.1"
              role="End User"
              goal="capture or upload images of sports matches"
              benefit="I can identify games and get related content instantly"
              priority="High"
              acceptanceCriteria={[
                "Camera button navigates to /image-recognition page",
                "Page shows large illustrated camera icon with gradient",
                "Two upload options: 'Take Photo' and 'Upload Image'",
                "Take Photo opens device camera on mobile",
                "Upload Image opens file picker",
                "Accepted file types: JPEG, PNG, HEIC",
                "Loading state shown while image processes"
              ]}
              technicalNotes="Use <input type='file' accept='image/*' capture='environment'> for camera. Store uploaded image in component state. Show loading animation during mock processing."
            />

            <UserStory
              id="US-10.2"
              role="End User"
              goal="receive AI-powered match identification results"
              benefit="I discover which game is in the image and can explore it"
              priority="High"
              acceptanceCriteria={[
                "Results show within 2-3 seconds of upload",
                "Display identified sport with icon and badge",
                "Show match details (teams, score, time, league)",
                "Confidence score displayed (e.g., '97% match')",
                "Match status shown (Live, Final, Scheduled)",
                "Hero image of the match displayed",
                "Key moments/highlights listed if available"
              ]}
              technicalNotes="Mock AI recognition with setTimeout(). Return predefined match data from mockData. Use animated transitions for result reveal."
            />

            <UserStory
              id="US-10.3"
              role="End User"
              goal="navigate to live match details or related articles"
              benefit="I can dive deeper into the content I discovered"
              priority="Medium"
              acceptanceCriteria={[
                "'View Live Match' button prominently displayed",
                "Button uses green gradient matching brand",
                "Clicking navigates to live match stats page",
                "'Related Articles' section shows 2-3 relevant articles",
                "Option to save match or share results",
                "'Scan Another' button to restart process"
              ]}
              technicalNotes="'View Live Match' navigates to /live-match/:matchId. Related articles filtered by sport and teams from recognition result."
            />

            <UserStory
              id="US-10.4"
              role="End User"
              goal="handle failed or unrecognized images gracefully"
              benefit="I understand what went wrong and can try again"
              priority="Medium"
              acceptanceCriteria={[
                "Error message shown when no match found",
                "Suggested actions: 'Try another image' or 'Enter match details'",
                "Image quality tips displayed (lighting, angle, clarity)",
                "Option to manually search for the match",
                "Fallback to browse popular live matches"
              ]}
              technicalNotes="Show error state after mock delay. Provide helpful messaging without technical jargon."
            />

            <UserStory
              id="US-10.5"
              role="AI System"
              goal="analyze image and match it to sports content database"
              benefit="users can discover content through visual search"
              priority="Medium"
              acceptanceCriteria={[
                "Image processing completes in under 3 seconds",
                "Recognition accuracy threshold of 80%+ for display",
                "Identify sport type, teams, and match context",
                "Extract visual elements (jerseys, logos, scoreboards)",
                "Return confidence score with results"
              ]}
              technicalNotes="Currently mocked. Future: integrate with Computer Vision API (AWS Rekognition, Google Vision, or custom model). Cache recognized images to improve performance."
            />
          </section>

          {/* NEW: User Stories - Brand Identity & Visual Design */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Epic 11: Brand Identity & Visual Design</h2>
            
            <UserStory
              id="US-11.1"
              role="End User"
              goal="see consistent brand colors throughout the app"
              benefit="the app feels cohesive and professionally designed"
              priority="High"
              acceptanceCriteria={[
                "Primary green gradient used on all CTAs: #1DB954 to #1ED760",
                "Gradient applied to buttons, badges, and active states",
                "Trending article badges use gradient background",
                "Profile avatar background uses gradient",
                "Scan button on all pages uses gradient",
                "Active filter states use gradient",
                "No usage of old solid green color (#15A047)"
              ]}
              technicalNotes="Global gradient: 'bg-gradient-to-r from-[#1DB954] to-[#1ED760]' or 'bg-gradient-to-br from-[#1DB954] to-[#1ED760]'. Apply consistently across all components."
            />

            <UserStory
              id="US-11.2"
              role="End User"
              goal="see the AlleenFans logo in the app header"
              benefit="I recognize the brand and build trust"
              priority="High"
              acceptanceCriteria={[
                "Logo displayed in top-left of header on all pages",
                "Logo image imported using figma:asset protocol",
                "Logo height: 64px (h-16) with auto width",
                "Logo maintains aspect ratio (object-contain)",
                "Logo paired with 'SportsFeed' text and tagline",
                "Logo tappable on mobile to return home"
              ]}
              technicalNotes="Import: import logoImage from 'figma:asset/595b10bf85c348efb344481f89b83545e64a81bb.png'. Use <img> tag with className='h-16 w-auto object-contain'"
            />

            <UserStory
              id="US-11.3"
              role="Developer"
              goal="maintain consistent gradient usage across all components"
              benefit="visual identity is cohesive and easy to update"
              priority="Medium"
              acceptanceCriteria={[
                "All buttons use gradient: from-[#1DB954] to-[#1ED760]",
                "All selected/active states use gradient",
                "Gradient direction varies by context (to-r, to-br)",
                "Text on gradients is white for contrast",
                "Hover states darken gradient slightly",
                "Opacity variations used for subtle backgrounds (e.g., /10, /5)"
              ]}
              technicalNotes="Standard button gradient: 'bg-gradient-to-r from-[#1DB954] to-[#1ED760] text-white'. Circular elements: 'bg-gradient-to-br'. Background tints: 'from-[#1DB954]/10 to-[#1ED760]/5'"
            />

            <UserStory
              id="US-11.4"
              role="End User"
              goal="experience smooth animations and transitions"
              benefit="the app feels modern and responsive to my actions"
              priority="Medium"
              acceptanceCriteria={[
                "Modal open/close uses spring animation",
                "Button presses scale down (0.95x)",
                "Page transitions fade smoothly",
                "Filter selections animate in",
                "Loading states use subtle motion",
                "All animations run at 60fps"
              ]}
              technicalNotes="Use motion/react: whileTap={{ scale: 0.95 }}, initial/animate props for page transitions. Spring configs: { damping: 30, stiffness: 300 }"
            />

            <UserStory
              id="US-11.5"
              role="Designer"
              goal="ensure accessibility with sufficient color contrast"
              benefit="all users can read content comfortably"
              priority="High"
              acceptanceCriteria={[
                "White text on gradient backgrounds (high contrast)",
                "Gradient background with white text meets WCAG AA (4.5:1)",
                "Disabled states clearly distinguishable",
                "Focus indicators visible on all interactive elements",
                "Color not the only indicator of state (also icons/text)"
              ]}
              technicalNotes="Test contrast with WCAG tools. Always pair color state with iconography (e.g., checkmark + gradient border for selected)."
            />
          </section>

          {/* Non-Functional Requirements */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Non-Functional Requirements</h2>
            
            <div className="space-y-6">
              <NFR
                category="Performance"
                requirements={[
                  "First Contentful Paint (FCP) < 1.5s",
                  "Time to Interactive (TTI) < 3.5s on 4G",
                  "Largest Contentful Paint (LCP) < 2.5s",
                  "Cumulative Layout Shift (CLS) < 0.1",
                  "Bundle size < 300KB gzipped for initial load"
                ]}
              />
              <NFR
                category="Accessibility"
                requirements={[
                  "WCAG 2.1 AA compliance minimum",
                  "Keyboard navigation for all interactions",
                  "Screen reader compatible with ARIA labels",
                  "Color contrast ratio minimum 4.5:1",
                  "Focus indicators visible on all interactive elements"
                ]}
              />
              <NFR
                category="Security"
                requirements={[
                  "HTTPS only in production",
                  "Content Security Policy (CSP) headers",
                  "XSS protection on all user inputs",
                  "Secure authentication token storage",
                  "CORS properly configured for API calls"
                ]}
              />
              <NFR
                category="Browser Support"
                requirements={[
                  "Chrome (last 2 versions)",
                  "Safari (last 2 versions)",
                  "Firefox (last 2 versions)",
                  "Edge (last 2 versions)",
                  "iOS Safari 14+"
                ]}
              />
              <NFR
                category="SEO & Discoverability"
                requirements={[
                  "Semantic HTML structure",
                  "Meta tags for social sharing (Open Graph, Twitter Cards)",
                  "Clean URL structure",
                  "XML sitemap generation",
                  "Robots.txt configuration"
                ]}
              />
            </div>
          </section>

          {/* Future Considerations */}
          <section className="bg-slate-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Future Enhancements & Roadmap</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FutureFeature
                title="Real-time Live Scores"
                description="Live game tracking with play-by-play updates and real-time statistics"
                priority="High"
                effort="Large"
              />
              <FutureFeature
                title="Video Content Integration"
                description="Highlights, replays, and original video content within articles"
                priority="High"
                effort="Large"
              />
              <FutureFeature
                title="Social Features"
                description="Comments, likes, user-generated content, and social profiles"
                priority="Medium"
                effort="Large"
              />
              <FutureFeature
                title="Fantasy Sports Integration"
                description="Fantasy team management and recommendations based on articles"
                priority="Medium"
                effort="X-Large"
              />
              <FutureFeature
                title="Podcasts & Audio"
                description="Sports podcasts and audio articles for on-the-go consumption"
                priority="Medium"
                effort="Medium"
              />
              <FutureFeature
                title="Advanced Analytics Dashboard"
                description="Deep-dive statistics and data visualization for power users"
                priority="Low"
                effort="Large"
              />
              <FutureFeature
                title="Betting Integration"
                description="Odds display and responsible gambling features (where legal)"
                priority="Low"
                effort="X-Large"
              />
              <FutureFeature
                title="Multi-language Support"
                description="Internationalization for global sports audience"
                priority="Low"
                effort="Medium"
              />
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

function RoleCard({ 
  title, 
  icon, 
  color, 
  description, 
  responsibilities, 
  permissions 
}: { 
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  responsibilities: string[];
  permissions: string[];
}) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    green: 'bg-green-100 text-green-600',
    indigo: 'bg-indigo-100 text-indigo-600',
  };

  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl ${colorClasses[color as keyof typeof colorClasses]}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
          <p className="text-slate-600 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Responsibilities</h4>
          <ul className="space-y-2">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Permissions</h4>
          <ul className="space-y-2">
            {permissions.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                <Shield className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function UserStory({ 
  id, 
  role, 
  goal, 
  benefit, 
  priority, 
  acceptanceCriteria,
  technicalNotes 
}: { 
  id: string;
  role: string;
  goal: string;
  benefit: string;
  priority: string;
  acceptanceCriteria: string[];
  technicalNotes?: string;
}) {
  const priorityColors = {
    Critical: 'bg-red-100 text-red-700 border-red-200',
    High: 'bg-green-100 text-green-700 border-green-200',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Low: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  return (
    <div className="border border-slate-200 rounded-xl p-6 mb-6 last:mb-0">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm font-semibold text-slate-600">{id}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${priorityColors[priority as keyof typeof priorityColors]}`}>
              {priority} Priority
            </span>
          </div>
          <div className="text-slate-700 leading-relaxed">
            As a <span className="font-semibold text-slate-900">{role}</span>, I want to{' '}
            <span className="font-semibold text-slate-900">{goal}</span>, so that{' '}
            <span className="font-semibold text-slate-900">{benefit}</span>.
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-slate-900 text-sm mb-3">Acceptance Criteria</h4>
        <ul className="space-y-2">
          {acceptanceCriteria.map((criteria, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{criteria}</span>
            </li>
          ))}
        </ul>
      </div>

      {technicalNotes && (
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <h4 className="font-semibold text-slate-900 text-sm mb-2">Technical Notes</h4>
          <p className="text-sm text-slate-600">{technicalNotes}</p>
        </div>
      )}
    </div>
  );
}

function NFR({ category, requirements }: { category: string; requirements: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-slate-900 mb-3">{category}</h3>
      <ul className="space-y-2">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FutureFeature({ 
  title, 
  description, 
  priority, 
  effort 
}: { 
  title: string;
  description: string;
  priority: string;
  effort: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200">
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <div className="flex items-center gap-3 text-xs">
        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded">Priority: {priority}</span>
        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded">Effort: {effort}</span>
      </div>
    </div>
  );
}