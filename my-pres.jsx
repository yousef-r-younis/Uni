import React, { useState } from 'react';
import { Zap, Clock, RefreshCw, Settings, Calendar, AlertTriangle } from 'lucide-react';

const DMAPresentation = () => {
  const [currentSection, setCurrentSection] = useState('problems');
  
  const problems = [
    {
      icon: Zap,
      title: "⚡ Energy Inefficiency",
      problem: "Always-on approach: DMA stays powered 24/7 consuming 2-5mW even when idle",
      impact: "60-80% of total system power wasted! In IoT devices on coin batteries, this drains them in DAYS instead of YEARS",
      example: "Like leaving your car engine running all night just in case you need to drive at 3am",
      color: "border-yellow-400"
    },
    {
      icon: Clock,
      title: "⏱️ High Latency",
      problem: "Reactive operation: DMA waits for CPU to configure it before every transfer",
      impact: "10-100μs delay per transfer. Unacceptable for real-time systems (robots, medical devices)",
      example: "Like a taxi driver who goes home between every ride instead of waiting near busy areas",
      color: "border-red-400"
    },
    {
      icon: RefreshCw,
      title: "🔄 No Pattern Awareness",
      problem: "Memoryless design: Treats every transfer as brand new, even if it happens every 100ms",
      impact: "Misses optimization in 70%+ of workloads (sensors, video streams are predictable!)",
      example: "Like a coffee shop that doesn't stock extra milk even though the morning rush happens EVERY day",
      color: "border-purple-400"
    },
    {
      icon: Settings,
      title: "⚙️ Fixed Power States",
      problem: "Binary operation: Either 100% ON or completely OFF. No in-between modes",
      impact: "40-60% energy wasted because you can't run at 'medium power' for medium tasks",
      example: "Like a fan with only OFF and MAX settings - you can't run it at comfortable speeds",
      color: "border-green-400"
    },
    {
      icon: Calendar,
      title: "🎯 Naive Scheduling",
      problem: "Simple FIFO or priority-only: Doesn't consider energy budgets, memory conflicts, or batching",
      impact: "30-50% throughput loss from memory bank conflicts and poor scheduling",
      example: "Like a restaurant taking orders first-come-first-serve even when some dishes can be cooked together",
      color: "border-blue-400"
    },
    {
      icon: AlertTriangle,
      title: "🔺 The Latency-Power Dilemma",
      problem: "THE CORE PROBLEM: Sleep deeply (save power) = slow wakeup. Stay awake (fast) = waste power",
      impact: "Can't have BOTH low latency AND low power. This is the fundamental problem YOUR project solves!",
      example: "Traditional DMA: Pick one - be sleepy and slow OR awake and wasteful. Your solution: PREDICT and be ready just in time!",
      color: "border-red-600"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Navigation */}
      <div className="bg-white rounded-xl shadow-xl p-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => setCurrentSection('problems')}
            className={`px-4 py-2 rounded font-medium ${currentSection === 'problems' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            1. Problems with DMA
          </button>
          <button 
            onClick={() => setCurrentSection('overview')}
            className={`px-4 py-2 rounded font-medium ${currentSection === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            2. System Overview
          </button>
          <button 
            onClick={() => setCurrentSection('petri')}
            className={`px-4 py-2 rounded font-medium ${currentSection === 'petri' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            3. Petri Net
          </button>
          <button 
            onClick={() => setCurrentSection('integration')}
            className={`px-4 py-2 rounded font-medium ${currentSection === 'integration' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            4. Model Integration
          </button>
          <button 
            onClick={() => setCurrentSection('conclusion')}
            className={`px-4 py-2 rounded font-medium ${currentSection === 'conclusion' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            5. Conclusion
          </button>
        </div>
      </div>

      {/* SECTION 1: PROBLEMS */}
      {currentSection === 'problems' && (
        <>
          <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Problems with Traditional DMA
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Yousef's Section - Click each card to see details
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
              <p className="font-bold text-blue-900">💡 Your Key Message:</p>
              <p className="text-blue-800">
                "Traditional DMA has 6 critical problems, but the biggest is the latency-power dilemma: 
                you can't be both fast AND energy-efficient. Our intelligent controller SOLVES this by 
                predicting transfers - sleeping deeply but waking up JUST IN TIME with zero latency!"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            {problems.map((prob, idx) => (
              <ProblemCard key={idx} {...prob} />
            ))}
          </div>

          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 mt-6">
            <h3 className="text-xl font-bold mb-3 text-green-900">🎯 Transition to Your Next Slide:</h3>
            <p className="text-green-800 text-lg">
              "So how do we solve these 6 problems, especially the latency-power dilemma? 
              Our solution has two core innovations: <strong>Predictive Prefetching</strong> and 
              <strong>Energy-Aware Scheduling</strong>. Let me show you how they work..."
            </p>
          </div>
        </>
      )}

      {/* SECTION 2: SYSTEM OVERVIEW */}
      {currentSection === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">System Overview</h1>
            <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-6">
              <p className="font-bold text-purple-900">💡 Your Key Message:</p>
              <p className="text-purple-800">
                "Our DMA controller has TWO superpowers that work together: it PREDICTS when transfers 
                will happen (so it can be ready with zero latency), and it's ENERGY-AWARE (choosing 
                the perfect power level for each task). This achieves 30-50% energy savings with ~0ms latency!"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">🧠 Innovation #1: Predictive Prefetching Engine</h2>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-bold mb-2">What it does:</p>
                <p>Watches transfer patterns and learns them (like "sensor sends data every 100ms")</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-bold mb-2">How it works:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Pattern Recognition Unit:</strong> Analyzes history of transfers</li>
                  <li><strong>ML-based Prediction:</strong> Predicts WHEN next transfer will happen</li>
                  <li><strong>Confidence Scoring:</strong> Only acts when 85%+ confident</li>
                  <li><strong>Proactive Prefetching:</strong> Gets ready BEFORE request arrives</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                <p className="font-bold mb-2">🎯 Result:</p>
                <p className="text-green-800 font-medium">ZERO LATENCY! Controller is already awake and ready when transfer request comes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">⚡ Innovation #2: Energy-Aware Scheduling</h2>
            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-2">What it does:</p>
                <p>Chooses the RIGHT power level for each task (not too much, not too little)</p>
              </div>
              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-2">How it works:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>DVFS (Dynamic Voltage-Frequency Scaling):</strong> Runs at different speeds</li>
                  <li><strong>6 Power States:</strong> From IDLE_DEEP (10μW) to ACTIVE_HIGH (2mW)</li>
                  <li><strong>Bank-Aware Scheduling:</strong> Avoids memory conflicts</li>
                  <li><strong>Transfer Coalescing:</strong> Batches multiple small transfers together</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                <p className="font-bold mb-2">🎯 Result:</p>
                <p className="text-green-800 font-medium">30-50% ENERGY SAVINGS! Uses only the power actually needed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🔄 How They Work Together</h2>
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg">
              <ol className="space-y-3 text-lg">
                <li><strong>1. Pattern Recognition:</strong> "Sensor transfers every 100ms"</li>
                <li><strong>2. Prediction:</strong> "Next transfer in 95ms" (85%+ confidence)</li>
                <li><strong>3. Energy Decision:</strong> "Wake from IDLE_DEEP → PREDICTED_READY at 90ms"</li>
                <li><strong>4. Perfect Timing:</strong> Ready at exactly 100ms with zero latency!</li>
                <li><strong>5. Back to Sleep:</strong> Transfer done, back to IDLE_DEEP to save power</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">📊 The Numbers</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="text-3xl font-bold text-green-700">30-50%</p>
                <p className="text-sm text-gray-600">Energy Reduction</p>
              </div>
              <div className="bg-blue-100 p-4 rounded text-center">
                <p className="text-3xl font-bold text-blue-700">~0ms</p>
                <p className="text-sm text-gray-600">Predicted Transfer Latency</p>
              </div>
              <div className="bg-purple-100 p-4 rounded text-center">
                <p className="text-3xl font-bold text-purple-700">4</p>
                <p className="text-sm text-gray-600">Concurrent Channels</p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-green-900">🎯 Transition to Moayad's FSM Section:</h3>
            <p className="text-green-800 text-lg">
              "So that's the high-level idea. Now Moayad will show you the FSM model - 
              the state machine that manages these 6 power states and transitions between them 
              based on predictions and energy conditions..."
            </p>
          </div>
        </div>
      )}

      {/* SECTION 3: PETRI NET */}
      {currentSection === 'petri' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Petri Net Model: Resource Management</h1>
            <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-6">
              <p className="font-bold text-purple-900">💡 Your Key Message:</p>
              <p className="text-purple-800">
                "The Petri Net models how our 4 DMA channels share resources without conflicts. 
                Think of it like a parking lot: 4 cars (channels) but only 1 exit (bus). 
                The Petri Net proves mathematically that we'll never have deadlocks or resource starvation!"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">🎯 What is a Petri Net? (Simple Explanation)</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-bold mb-2">Circles (Places) = Resources or States</p>
                <p>Examples: Channel1_Idle, DMA_Bus, Power_Budget</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-2">Rectangles (Transitions) = Actions</p>
                <p>Examples: START_transfer, COMPLETE_transfer, Recharge_power</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold mb-2">Dots (Tokens) = Available Resources</p>
                <p>Example: 4 tokens in Power_Budget means "4 units of energy available"</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold mb-2">Arrows = Flow of Tokens</p>
                <p>When a transition fires, it consumes tokens from input places and produces tokens in output places</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">🏗️ Our Petri Net Structure</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-lg mb-3">Places (Resources):</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">•</span>
                    <span><strong>Channel1/2/3/4_Idle:</strong> Each has 1 token when that channel is free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-red-600">•</span>
                    <span><strong>DMA_Bus:</strong> Only 1 token! (Mutual exclusion - only 1 channel uses bus at a time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">•</span>
                    <span><strong>Power_Budget:</strong> 4 tokens (4 energy units available)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">•</span>
                    <span><strong>Transfer_Requests:</strong> Queue of pending requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">•</span>
                    <span><strong>Active_Transfer:</strong> Token here means a transfer is happening</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-lg mb-3">Transitions (Actions):</p>
                <ul className="space-y-2">
                  <li><strong>START:</strong> Begin a transfer (needs: idle channel + bus + power + request)</li>
                  <li><strong>COMPLETE:</strong> Finish transfer (releases: channel + bus, produces power back)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">✅ Key Properties We Prove</h2>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p className="font-bold mb-2">1. Mutual Exclusion</p>
                <p>Only 1 channel can use the DMA bus at any time (enforced by single token in DMA_Bus)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="font-bold mb-2">2. Deadlock-Free</p>
                <p>System will NEVER get stuck. Verified through "siphon analysis" (all resources can be released)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <p className="font-bold mb-2">3. Power Constraints Enforced</p>
                <p>Can't use more than 4 energy units. Power recharge transition ensures eventual progress</p>
              </div>
              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                <p className="font-bold mb-2">4. Concurrency Bounds</p>
                <p>Up to 4 channels can be in different states, but only 1 actively transferring</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🎬 Example Scenario</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg space-y-3">
              <p className="font-bold text-lg">Initial State:</p>
              <ul className="space-y-1 ml-4">
                <li>• Channel1_Idle: 1 token (channel free)</li>
                <li>• DMA_Bus: 1 token (bus available)</li>
                <li>• Power_Budget: 4 tokens (full energy)</li>
                <li>• Transfer_Requests: 2 tokens (2 pending requests)</li>
              </ul>
              
              <p className="font-bold text-lg mt-4">Action: START transition fires</p>
              <ul className="space-y-1 ml-4">
                <li>✓ Consumes: 1 from Channel1_Idle, 1 from DMA_Bus, 1 from Power_Budget, 1 from Requests</li>
                <li>✓ Produces: 1 in Active_Transfer</li>
              </ul>
              
              <p className="font-bold text-lg mt-4">Result:</p>
              <ul className="space-y-1 ml-4">
                <li>• Channel1 now busy (no token in Channel1_Idle)</li>
                <li>• Bus locked (no token in DMA_Bus - other channels must wait!)</li>
                <li>• Power reduced to 3</li>
                <li>• Transfer happening</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-green-900">🎯 Transition to Model Integration:</h3>
            <p className="text-green-800 text-lg">
              "So the Petri Net proves our resource management is safe and deadlock-free. 
              But we actually used THREE different models - FSM, Dataflow, and Petri Net. 
              Let me show you how they all work together and what unique insights each provides..."
            </p>
          </div>
        </div>
      )}

      {/* SECTION 4: MODEL INTEGRATION */}
      {currentSection === 'integration' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Model Integration & Insights</h1>
            <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-6">
              <p className="font-bold text-purple-900">💡 Your Key Message:</p>
              <p className="text-purple-800">
                "We used 3 different models because each shows us something unique. Think of it like 
                describing a car: blueprint (structure), flow chart (how it drives), and traffic rules 
                (how it shares the road). Together they give us a COMPLETE formal specification!"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🎯 Why 3 Models?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded border-2 border-blue-400">
                <p className="font-bold text-lg mb-2 text-blue-800">🔄 FSM</p>
                <p className="text-sm mb-2 font-semibold">Models: CONTROL FLOW</p>
                <p className="text-sm">Answers: "What states exist? How do we transition? When do we change power modes?"</p>
              </div>
              <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                <p className="font-bold text-lg mb-2 text-green-800">📊 Dataflow (SDF)</p>
                <p className="text-sm mb-2 font-semibold">Models: DATA MOVEMENT</p>
                <p className="text-sm">Answers: "Where does data flow? What are buffer sizes? What's the throughput?"</p>
              </div>
              <div className="bg-purple-50 p-4 rounded border-2 border-purple-400">
                <p className="font-bold text-lg mb-2 text-purple-800">🕸️ Petri Net</p>
                <p className="text-sm mb-2 font-semibold">Models: RESOURCES & CONCURRENCY</p>
                <p className="text-sm">Answers: "How do channels share resources? Can we deadlock? What's safe?"</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">🔄 What Each Model Contributes</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded border-l-4 border-blue-500">
                <p className="font-bold text-lg mb-2">FSM (Finite State Machine)</p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Power state management (7 states from IDLE_DEEP to ERROR)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Channel lifecycle (idle → predicted → configured → active)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Mode transitions (when to escalate/de-escalate power)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Error handling (what happens if bus error occurs)</li>
                </ul>
                <div className="mt-3 bg-white p-3 rounded">
                  <p className="font-bold text-sm">Example Query:</p>
                  <p className="text-sm italic">"Can we reach ACTIVE_HIGH from IDLE_DEEP?"</p>
                  <p className="text-sm text-green-700 font-medium">✓ Yes! Path: IDLE_DEEP → IDLE_LIGHT → CONFIGURED → ACTIVE_HIGH</p>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded border-l-4 border-green-500">
                <p className="font-bold text-lg mb-2">Dataflow (SDF - Synchronous Dataflow)</p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Throughput analysis (max 1 transfer per DMA cycle)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Buffer sizing (how big should queues be?)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Schedulability (is the pipeline deadlock-free?)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Pipeline optimization (where are bottlenecks?)</li>
                </ul>
                <div className="mt-3 bg-white p-3 rounded">
                  <p className="font-bold text-sm">Example Query:</p>
                  <p className="text-sm italic">"What's the minimum buffer for predictions?"</p>
                  <p className="text-sm text-green-700 font-medium">✓ 2 entries (computed from production/consumption rates)</p>
                </div>
              </div>

              <div className="bg-purple-50 p-5 rounded border-l-4 border-purple-500">
                <p className="font-bold text-lg mb-2">Petri Net</p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Resource allocation (bus, channels, power)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Deadlock detection (mathematically proven safe)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Concurrency bounds (max 4 channels, 1 bus user)</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Mutual exclusion (only 1 on bus at a time)</li>
                </ul>
                <div className="mt-3 bg-white p-3 rounded">
                  <p className="font-bold text-sm">Example Query:</p>
                  <p className="text-sm italic">"Can we deadlock with all channels active?"</p>
                  <p className="text-sm text-green-700 font-medium">✓ No! Proven deadlock-free via siphon analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">🔗 Cross-Model Validation</h2>
            <p className="mb-4">The models aren't separate - they validate and connect to each other!</p>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-2">FSM ↔ Petri Net Connection</p>
                <p className="text-sm mb-2">FSM states MAP TO Petri Net markings (token distributions)</p>
                <div className="bg-white p-3 rounded text-sm mt-2">
                  <p className="font-mono">FSM state "ACTIVE_HIGH" = Petri Net marking "(active_xfer=1) AND (power_mode=HIGH)"</p>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-2">Dataflow ↔ Petri Net Connection</p>
                <p className="text-sm mb-2">SDF tokens ARE Petri Net tokens! Data flows through places</p>
                <div className="bg-white p-3 rounded text-sm mt-2">
                  <p className="font-mono">SDF token in "prediction buffer" = Petri Net token in "predictions" place</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">🎯 Key Insights from Multi-Model Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-2">✓ System Properties Verified:</p>
                <ul className="text-sm space-y-1">
                  <li>• Deadlock-free (Petri Net)</li>
                  <li>• Bounded memory (Dataflow)</li>
                  <li>• Safe transitions (FSM)</li>
                  <li>• Deterministic (all models)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded">
                <p className="font-bold mb-2">🎯 Design Optimizations:</p>
                <ul className="text-sm space-y-1">
                  <li>• Optimal buffer sizes (SDF)</li>
                  <li>• Minimal power transitions (FSM)</li>
                  <li>• Max 4 concurrent channels (PN)</li>
                  <li>• Critical paths identified (SDF)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold mb-2">⚡ Performance Guarantees:</p>
                <ul className="text-sm space-y-1">
                  <li>• Throughput: 1 xfer/cycle (SDF)</li>
                  <li>• Latency: 0ms predicted (FSM)</li>
                  <li>• Power: 30-50% savings (FSM)</li>
                  <li>• Concurrency: 4 channels safe (PN)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold mb-2">🔍 Novel Contributions:</p>
                <ul className="text-sm space-y-1">
                  <li>• Prediction state in FSM (NEW!)</li>
                  <li>• Energy tokens in Petri Net</li>
                  <li>• Confidence-based dataflow</li>
                  <li>• Multi-level power states</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 border-2 border-purple-400">
            <h3 className="text-xl font-bold mb-3">🧠 The Big Picture:</h3>
            <p className="text-lg mb-3">
              Think of designing a self-driving car:</p>
            <ul className="space-y-2 ml-4">
              <li><strong>FSM</strong> = The rules: "If speed {'>'} 60mph, use high gear"</li>
              <li><strong>Dataflow</strong> = The pipeline: "Sensor → Processing → Actuator"</li>
              <li><strong>Petri Net</strong> = Traffic laws: "Only 1 car in intersection at a time"</li>
            </ul>
            <p className="text-lg mt-3 font-bold">Together = Complete, provably correct system!</p>
          </div>

          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-green-900">🎯 Transition to Moayad's Use Case:</h3>
            <p className="text-green-800 text-lg">
              "So we've formally proven our design works using 3 complementary models. 
              Now Moayad will show you a concrete example: an IoT sensor that sends data 
              every 100ms, and how our controller achieves 94% energy savings with zero latency..."
            </p>
          </div>
        </div>
      )}

      {/* SECTION 5: CONCLUSION */}
      {currentSection === 'conclusion' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Conclusion & Future Work</h1>
            <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-6">
              <p className="font-bold text-purple-900">💡 Your Key Message:</p>
              <p className="text-purple-800">
                "We've formally modeled an intelligent DMA controller using 3 Models of Computation. 
                We PROVED it's deadlock-free, energy-efficient, and achieves zero-latency transfers. 
                This is Part 1 - next we'll actually BUILD it!"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">📋 Summary of MoC Analysis</h2>
            <p className="mb-4">We formally modeled our controller using 3 complementary approaches:</p>
            
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <p className="font-bold">FSM (Finite State Machine)</p>
                  <p className="text-sm">7 states, 16 transitions modeling power-aware lifecycle with prediction</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded flex items-start gap-3">
                <span className="text-3xl">📊</span>
                <div>
                  <p className="font-bold">Dataflow (SDF)</p>
                  <p className="text-sm">7-node pipeline with fixed rates for schedulability and buffer analysis</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded flex items-start gap-3">
                <span className="text-3xl">🕸️</span>
                <div>
                  <p className="font-bold">Petri Net</p>
                  <p className="text-sm">13 places, 8 transitions modeling resource contention and concurrency</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">🏆 Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p className="font-bold mb-2">✅ Formally Verified Properties:</p>
                <ul className="text-sm space-y-1">
                  <li>• Deadlock-free operation</li>
                  <li>• Bounded memory requirements</li>
                  <li>• Guaranteed throughput</li>
                  <li>• Safe resource sharing</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="font-bold mb-2">📊 Performance Metrics:</p>
                <ul className="text-sm space-y-1">
                  <li>• 30-50% energy savings</li>
                  <li>• Zero latency for predicted transfers</li>
                  <li>• 4 concurrent channels</li>
                  <li>• 1 transfer per DMA cycle max</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">🌟 Novel Contributions</h2>
            <p className="mb-4 text-gray-600">What makes this project special and NEW:</p>
            
            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-1">🧠 Prediction State in FSM</p>
                <p className="text-sm">First-class integration of ML prediction as a formal state (PREDICTED_READY) - this is NOVEL!</p>
              </div>

              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-1">⚡ Energy Tokens in Petri Net</p>
                <p className="text-sm">Modeling power budget as tokens - enables formal verification of energy constraints</p>
              </div>

              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-1">📊 Confidence-Based Dataflow</p>
                <p className="text-sm">SDF firing rules based on prediction confidence (85%+ threshold) - probabilistic dataflow!</p>
              </div>

              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-1">🔋 Multi-Level Power States</p>
                <p className="text-sm">6 distinct power states formally modeled (most DMA has 2: on/off)</p>
              </div>

              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold mb-1">🎯 Cross-Model Validation</p>
                <p className="text-sm">Framework for validating consistency across FSM, Dataflow, and Petri Net</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">🚀 Future Work</h2>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-lg mb-2">Part 2: Implementation</p>
                <p className="text-sm mb-2">This was just the DESIGN. Next we actually BUILD it:</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Hardware synthesis from FSM model (convert to Verilog/VHDL)</li>
                  <li>• ML prediction engine implementation (neural network or decision tree)</li>
                  <li>• DVFS controller integration (actual voltage/frequency scaling hardware)</li>
                  <li>• FPGA prototype development (test on real hardware!)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-lg mb-2">Extended Analysis</p>
                <p className="text-sm mb-2">Make the models even more powerful:</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Timed Petri Net:</strong> Add real-time timing constraints (not just "eventually")</li>
                  <li>• <strong>Probabilistic Dataflow:</strong> Model prediction accuracy statistically</li>
                  <li>• <strong>Hybrid Automata:</strong> Continuous power dynamics (voltage curves over time)</li>
                  <li>• <strong>Model-Based Testing:</strong> Auto-generate test cases from formal models</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 border-2 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-center">🎯 The Bottom Line</h3>
            <div className="space-y-3 text-center">
              <p className="text-lg font-medium">
                We've designed an intelligent DMA controller that solves the latency-power dilemma
              </p>
              <div className="flex justify-center gap-8 my-4">
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-green-600">30-50%</p>
                  <p className="text-sm">Energy Savings</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-blue-600">~0ms</p>
                  <p className="text-sm">Latency</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-purple-600">✓</p>
                  <p className="text-sm">Proven Safe</p>
                </div>
              </div>
              <p className="text-lg font-medium">
                Using 3 Models of Computation for formal verification
              </p>
            </div>
          </div>

          <div className="bg-gray-800 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl mb-6">Questions & Discussion</p>
            <div className="flex justify-center gap-8">
              <div>
                <p className="font-bold">Moayad Salloum</p>
                <p className="text-sm text-gray-300">FSM, Dataflow, Use Case</p>
              </div>
              <div>
                <p className="font-bold">Yousef Younis</p>
                <p className="text-sm text-gray-300">Problems, Overview, Petri Net, Integration, Conclusion</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-6">CENG507 - Embedded System Design | Part 1: Models of Computation | January 2026</p>
          </div>
        </div>
      )}
    </div>
  );
}

const ProblemCard = ({ icon: Icon, title, problem, impact, example, color }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={`border-2 ${color} rounded-lg p-4 mb-4 cursor-pointer transition-all hover:shadow-lg`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-8 h-8 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 font-medium mb-2">{problem}</p>
          {expanded && (
            <div className="mt-3 space-y-2 text-sm">
              <div className="bg-red-50 p-3 rounded">
                <strong>Impact:</strong> {impact}
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <strong>Example:</strong> {example}
              </div>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">
            {expanded ? '▲ Click to collapse' : '▼ Click for details'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <DMAPresentation />;
}