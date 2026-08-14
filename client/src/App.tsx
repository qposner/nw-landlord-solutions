import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useParams, Redirect } from "wouter";
import { getBlogPostBySlug } from "@/lib/blogData";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. Use deep navy surfaces, electric-blue operational signals, sharp geometry, asymmetric layouts, and direct institutional language.
*/
// /blog/:slug serves both articles and category pages; articles win when the slug matches a post.
function BlogSlugDispatch() {
  const { slug } = useParams<{ slug: string }>();
  return slug && getBlogPostBySlug(slug) ? <BlogPost /> : <BlogCategory />;
}

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/platform" component={Platform} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogSlugDispatch} />
        <Route path="/contact" component={Contact} />
        <Route path="/service-areas" component={ServiceAreas} />
        
        {/* 301 SEO Legacy & Broken Route Redirects */}
        <Route path="/legal-causes-for-eviction">
          <Redirect to="/services" />
        </Route>
        <Route path="/eviction-process">
          <Redirect to="/services" />
        </Route>
        <Route path="/clark-county-eviction-attorney">
          <Redirect to="/service-areas" />
        </Route>

        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
