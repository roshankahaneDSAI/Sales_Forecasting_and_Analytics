"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InputForm from "@/components/InputForm";
import ResultDisplay from "@/components/ResultDisplay";
import Section from "@/components/Section";
import StepCard from "@/components/StepCard";
import {
  FaIdCard,
  FaCalendarAlt,
  FaChartLine,
  FaStore,
  FaBoxes,
  FaMoneyBillWave,
} from "react-icons/fa";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />

      <main className="container mx-auto px-4">
        {/* HERO + LIVE DEMO */}
        <Section id="home" className="pt-28 lg:pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-orange-400/40 bg-orange-500/10 text-sm text-orange-300">
                AI Retail Demand Forecasting
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-rose-500">
                Predict tomorrow&apos;s sales.
                <br className="hidden md:block" />
                Stock perfectly today.
              </h1>

              <p className="text-base md:text-lg text-slate-300 mb-8 max-w-xl">
                Sales forecast turns raw sales history into SKU-level forecasts,
                helping grocery and retail stores cut waste, avoid stockouts,
                and unlock truly data-driven inventory planning.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-sm md:text-base font-semibold shadow-lg shadow-red-500/25 hover:scale-[1.02] active:scale-[0.99] transition-transform"
                  onClick={() =>
                    document
                      .getElementById("demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Try live forecast
                </button>
                <button
                  className="px-6 py-3 rounded-xl border border-slate-600/80 bg-slate-900/40 text-sm md:text-base font-semibold hover:border-orange-400/70 hover:bg-slate-900/80 transition-all"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See how it works
                </button>
              </div>

              {/* Hero stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-slate-900/70 border border-slate-700/80 rounded-xl px-4 py-3">
                  <p className="text-lg md:text-2xl font-bold text-orange-400">
                    32%
                  </p>
                  <p className="text-xs md:text-sm text-slate-300">
                    Less perishable waste
                  </p>
                </div>
                <div className="bg-slate-900/70 border border-slate-700/80 rounded-xl px-4 py-3">
                  <p className="text-lg md:text-2xl font-bold text-red-400">
                    18%
                  </p>
                  <p className="text-xs md:text-sm text-slate-300">
                    Uplift in on-shelf sales
                  </p>
                </div>
                <div className="bg-slate-900/70 border border-slate-700/80 rounded-xl px-4 py-3">
                  <p className="text-lg md:text-2xl font-bold text-rose-400">
                    95%
                  </p>
                  <p className="text-xs md:text-sm text-slate-300">
                    Weekly forecast accuracy
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Demo card */}
            <div
              id="demo"
              className="bg-slate-900/80 border border-slate-700/80 rounded-2xl shadow-2xl shadow-red-500/10 p-6 sm:p-8 backdrop-blur"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    Try Sales Forecast
                  </h2>
                  <p className="text-sm text-slate-400">
                    Plug in store &amp; product details to see an AI prediction.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-orange-300 text-xs">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  Live demo
                </div>
              </div>

              <InputForm />
              <div className="mt-4">
                <ResultDisplay result={{ status: "", predicted_sales: 0 }} />
              </div>
            </div>
          </div>
        </Section>

        {/* PROBLEM / BREAKTHROUGH STORY */}
        <Section id="story" className="py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                From guesswork to data-driven retail
              </h2>
              <p className="text-slate-300">
                Most grocers still rely on spreadsheets, gut feeling, and last
                year&apos;s numbers. Sales forecast replaces this with an always-on
                forecasting engine that learns from every sale.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-10 lg:gap-12 items-start">
              {/* Left: Problem & Breakthrough */}
              <div className="space-y-8">
                <div className="bg-slate-900/80 p-7 md:p-8 rounded-xl border border-red-500/70">
                  <h3 className="text-2xl font-semibold mb-4 text-red-400">
                    The Problem
                  </h3>
                  <p className="text-slate-200 mb-4">
                    Grocery and retail teams wake up to the same challenge every
                    day:{" "}
                    <span className="font-semibold">
                      how much of every SKU should we stock?
                    </span>{" "}
                    Getting it wrong is expensive:
                  </p>
                  <ul className="list-disc pl-6 text-slate-300 space-y-3 text-sm md:text-base">
                    <li>
                      Overstocking creates over{" "}
                      <span className="font-semibold">$1 trillion</span> in
                      global food waste every year.
                    </li>
                    <li>
                      Understocking means{" "}
                      <span className="font-semibold">lost revenue</span>,
                      disappointed shoppers, and weaker loyalty.
                    </li>
                    <li>
                      Manual forecasts can&apos;t keep up with{" "}
                      <span className="font-semibold">
                        promotions, seasonality, weather, or local events
                      </span>
                      .
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/80 p-7 md:p-8 rounded-xl border border-orange-500/70">
                  <h3 className="text-2xl font-semibold mb-4 text-orange-300">
                    Our Breakthrough
                  </h3>
                  <p className="text-slate-200 mb-4">
                    Sales forecast learns from rich, real-world retail data including
                    Corporación Favorita&apos;s multi-year dataset to generate
                    store- and SKU-specific forecasts:
                  </p>
                  <ul className="list-disc pl-6 text-slate-300 space-y-3 text-sm md:text-base">
                    <li>
                      Uses <span className="font-semibold">5+ years</span> of
                      historical sales signals and product metadata.
                    </li>
                    <li>
                      Captures the impact of{" "}
                      <span className="font-semibold">
                        holidays, promotions, local demand patterns, and more
                      </span>
                      .
                    </li>
                    <li>
                      Produces{" "}
                      <span className="font-semibold">
                        daily SKU-level predictions
                      </span>{" "}
                      that plug directly into replenishment workflows.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Impact metrics card */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-700/80 p-7 md:p-8 flex flex-col justify-between shadow-2xl shadow-red-500/10">
                <h4 className="text-lg font-semibold mb-6 text-slate-100">
                  What early adopters achieve with Sales forecast
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500/15 p-3 rounded-full">
                      <FaChartLine className="text-orange-300 text-xl" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-white">
                        32% reduction
                      </p>
                      <p className="text-slate-400 text-sm">
                        in perishable waste across pilot stores.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-red-500/15 p-3 rounded-full">
                      <FaMoneyBillWave className="text-red-300 text-xl" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-white">
                        18% sales uplift
                      </p>
                      <p className="text-slate-400 text-sm">
                        from higher on-shelf availability and better promos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-rose-500/15 p-3 rounded-full">
                      <FaStore className="text-rose-300 text-xl" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-white">
                        95% accuracy
                      </p>
                      <p className="text-slate-400 text-sm">
                        in weekly forecasts for key categories.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-700/80 text-sm text-slate-400">
                  Designed for grocery, supermarkets, and multi-store retailers
                  running hundreds to thousands of SKUs.
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section id="how-it-works" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">
              How Sales forecast Works
            </h2>
            <p className="text-center text-slate-300 mb-14 max-w-2xl mx-auto">
              Under the hood, Sales forecast combines time-series modeling, machine
              learning, and external signals to give you forecasts you can act
              on quickly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard
                icon={<FaIdCard className="text-4xl text-orange-300" />}
                title="1. Connect &amp; Configure"
                description="Add your stores, SKUs, and date ranges. Map your historical sales data or start with example data."
                gradient="from-orange-500/15 to-orange-500/5"
              />
              <StepCard
                icon={<FaCalendarAlt className="text-4xl text-red-300" />}
                title="2. AI Forecasting"
                description="Our models learn from past patterns, seasonality, promos, and local demand signals to predict future sales."
                gradient="from-red-500/15 to-red-500/5"
              />
              <StepCard
                icon={<FaChartLine className="text-4xl text-rose-300" />}
                title="3. Actionable Outputs"
                description="Get SKU-level forecasts and insights you can plug into purchasing, replenishment, and pricing decisions."
                gradient="from-rose-500/15 to-rose-500/5"
              />
            </div>
          </div>
        </Section>

        {/* BENEFITS / VALUE GRID */}
        <Section id="benefits" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
              Why retailers choose Sales forecast
            </h2>
            <p className="text-center text-slate-300 mb-14 max-w-2xl mx-auto">
              Built for operations teams that need fast, reliable answers—not
              another dashboard to babysit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/80 p-7 rounded-xl border border-slate-700 hover:border-orange-400/80 hover:-translate-y-1 transition-all">
                <div className="text-orange-300 text-3xl mb-3">
                  <FaMoneyBillWave />
                </div>
                <h3 className="text-xl font-semibold mb-2">Boost revenue</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  Keep shelves stocked with what customers actually buy, while
                  avoiding expensive overbuying.
                </p>
              </div>

              <div className="bg-slate-900/80 p-7 rounded-xl border border-slate-700 hover:border-red-400/80 hover:-translate-y-1 transition-all">
                <div className="text-red-300 text-3xl mb-3">
                  <FaBoxes />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cut waste</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  Tighten orders for perishables and slow movers using precise
                  demand curves instead of rough rules of thumb.
                </p>
              </div>

              <div className="bg-slate-900/80 p-7 rounded-xl border border-slate-700 hover:border-rose-400/80 hover:-translate-y-1 transition-all">
                <div className="text-rose-300 text-3xl mb-3">
                  <FaStore />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Align teams around data
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  Give planners, category managers, and store leaders a single,
                  trusted view of expected demand.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section id="get-started" className="py-16 pb-24">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-950/90 border border-orange-500/50 rounded-2xl px-6 sm:px-10 py-12 shadow-2xl shadow-red-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              Ready to forecast your next week of sales?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Use the live demo above or connect your own data to see how
              Sales forecast can reshape inventory, reduce waste, and increase
              profitability across your stores.
            </p>
            <button
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 font-semibold shadow-lg shadow-red-500/30 hover:scale-[1.02] active:scale-[0.99] transition-transform"
              onClick={() =>
                document
                  .getElementById("demo")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start with a forecast
            </button>
          </div>
        </Section>
      </main>

      <ToastContainer />
      <Footer />
    </div>
  );
}
