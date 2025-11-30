"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Info,
} from "lucide-react";
import Link from "next/link";

export function ROICalculator() {
  const [inputs, setInputs] = useState({
    monthlyConversations: 10000,
    avgHandleTime: 8, // minutes
    agentHourlyCost: 25,
    currentAgents: 10,
    automationRate: 70,
  });

  const results = useMemo(() => {
    const {
      monthlyConversations,
      avgHandleTime,
      agentHourlyCost,
      currentAgents,
      automationRate,
    } = inputs;

    // Current costs
    const totalHandleHours = (monthlyConversations * avgHandleTime) / 60;
    const currentMonthlyCost = currentAgents * agentHourlyCost * 160; // 160 hours/month

    // With AI
    const automatedConversations =
      monthlyConversations * (automationRate / 100);
    const humanConversations = monthlyConversations - automatedConversations;
    const newHandleHours = (humanConversations * avgHandleTime) / 60;
    const agentsNeeded = Math.ceil(newHandleHours / 160);
    const newAgentCost = agentsNeeded * agentHourlyCost * 160;
    const aiPlatformCost = 2000 + automatedConversations * 0.02; // Base + per conversation
    const newTotalCost = newAgentCost + aiPlatformCost;

    // Savings
    const monthlySavings = Math.max(0, currentMonthlyCost - newTotalCost);
    const annualSavings = monthlySavings * 12;
    const roiPercentage =
      currentMonthlyCost > 0 ? (monthlySavings / currentMonthlyCost) * 100 : 0;
    const paybackMonths =
      monthlySavings > 0 ? Math.ceil(aiPlatformCost / monthlySavings) : 0;

    return {
      currentMonthlyCost,
      newTotalCost,
      monthlySavings,
      annualSavings,
      roiPercentage,
      paybackMonths,
      automatedConversations,
      agentsNeeded,
      aiPlatformCost,
      timeSaved: totalHandleHours - newHandleHours,
    };
  }, [inputs]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(Math.round(value));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
            <Calculator className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Your Current Setup</h2>
            <p className="text-white/50 text-sm">
              Adjust the values to match your business
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Monthly Conversations */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-white/80">
                Monthly Conversations
              </label>
              <span className="text-sm text-purple-400">
                {formatNumber(inputs.monthlyConversations)}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={inputs.monthlyConversations}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  monthlyConversations: Number(e.target.value),
                })
              }
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
            />
            <div className="flex justify-between text-xs text-white/40 mt-1">
              <span>1K</span>
              <span>100K</span>
            </div>
          </div>

          {/* Average Handle Time */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-white/80">
                Avg. Handle Time (minutes)
              </label>
              <span className="text-sm text-purple-400">
                {inputs.avgHandleTime} min
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={inputs.avgHandleTime}
              onChange={(e) =>
                setInputs({ ...inputs, avgHandleTime: Number(e.target.value) })
              }
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
            />
            <div className="flex justify-between text-xs text-white/40 mt-1">
              <span>2 min</span>
              <span>20 min</span>
            </div>
          </div>

          {/* Agent Hourly Cost */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-white/80">
                Agent Hourly Cost
              </label>
              <span className="text-sm text-purple-400">
                ${inputs.agentHourlyCost}/hr
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="75"
              step="5"
              value={inputs.agentHourlyCost}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  agentHourlyCost: Number(e.target.value),
                })
              }
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
            />
            <div className="flex justify-between text-xs text-white/40 mt-1">
              <span>$15/hr</span>
              <span>$75/hr</span>
            </div>
          </div>

          {/* Current Agents */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-white/80">
                Current Support Agents
              </label>
              <span className="text-sm text-purple-400">
                {inputs.currentAgents} agents
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={inputs.currentAgents}
              onChange={(e) =>
                setInputs({ ...inputs, currentAgents: Number(e.target.value) })
              }
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
            />
            <div className="flex justify-between text-xs text-white/40 mt-1">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          {/* AI Automation Rate */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-1">
                Expected AI Automation Rate
                <span className="group relative">
                  <Info className="w-4 h-4 text-white/40 cursor-help" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 rounded-lg text-xs text-white/80 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Percentage of conversations that can be fully handled by AI
                    without human intervention
                  </span>
                </span>
              </label>
              <span className="text-sm text-purple-400">
                {inputs.automationRate}%
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="90"
              step="5"
              value={inputs.automationRate}
              onChange={(e) =>
                setInputs({ ...inputs, automationRate: Number(e.target.value) })
              }
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
            />
            <div className="flex justify-between text-xs text-white/40 mt-1">
              <span>30%</span>
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {/* Main Savings Card */}
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8">
          <h2 className="text-lg font-medium text-white/60 mb-2">
            Your Estimated Annual Savings
          </h2>
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            {formatCurrency(results.annualSavings)}
          </div>
          <p className="text-white/60 mb-6">
            That's {formatCurrency(results.monthlySavings)} per month with{" "}
            {Math.round(results.roiPercentage)}% cost reduction
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">
                {formatCurrency(results.currentMonthlyCost)}
              </div>
              <div className="text-sm text-white/50">Current Monthly Cost</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400">
                {formatCurrency(results.newTotalCost)}
              </div>
              <div className="text-sm text-white/50">With Narxu AI</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-2xl font-bold">
              {Math.round(results.roiPercentage)}%
            </div>
            <div className="text-sm text-white/50">Cost Reduction</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <Clock className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-2xl font-bold">{results.paybackMonths} mo</div>
            <div className="text-sm text-white/50">Payback Period</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <Users className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-2xl font-bold">
              {formatNumber(results.automatedConversations)}
            </div>
            <div className="text-sm text-white/50">Auto-Resolved/Month</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <DollarSign className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-2xl font-bold">
              {formatNumber(results.timeSaved)} hrs
            </div>
            <div className="text-sm text-white/50">Time Saved/Month</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">What You Get</h3>
          <ul className="space-y-3">
            {[
              "24/7 instant customer support",
              "Reduce agent workload by " + inputs.automationRate + "%",
              "Scale without hiring more agents",
              "Improve response time to under 1 second",
              "Increase customer satisfaction by 40%+",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all duration-300 group"
        >
          Get Your Custom ROI Analysis
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
