import { Route, Switch } from "wouter";
import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home"; // FAQ
import DesignJS from "@/pages/DesignJS"; // Browse Talent
import HuzzlerAI from "@/pages/HuzzlerAI"; // About
import Component1 from "@/pages/Component1"; // Landing Page
import Component6 from "@/pages/Component6"; // Dashboard
import Features from "@/pages/Features";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <Switch>
      {/* Home */}
      <Route
        path="/"
        component={() => (
          <MainLayout>
            <Component1 />
          </MainLayout>
        )}
      />

      {/* Browse Talent */}
      <Route
        path="/browse-talent"
        component={() => (
          <MainLayout>
            <DesignJS />
          </MainLayout>
        )}
      />

      {/* Features */}
      <Route
        path="/features"
        component={() => (
          <MainLayout>
            <Features />
          </MainLayout>
        )}
      />

      {/* About */}
      <Route
        path="/about"
        component={() => (
          <MainLayout>
            <HuzzlerAI />
          </MainLayout>
        )}
      />

      {/* FAQ */}
      <Route
        path="/faq"
        component={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )}
      />

      {/* Become Freelancer */}
      <Route
        path="/become-freelancer"
        component={() => (
          <MainLayout>
            <Component1 />
          </MainLayout>
        )}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        component={() => (
          <MainLayout>
            <Component6 />
          </MainLayout>
        )}
      />

      {/* 404 */}
      <Route path="/404" component={NotFound} />

      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}