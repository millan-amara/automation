// src/components/CaseStudies/ROICalculator.jsx
import { useState } from 'react'
import { TrendingUp, Clock, DollarSign, Target, RefreshCw } from 'lucide-react'
import Button from '../UI/Button'

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    inquiries: 100,
    teamSize: 5,
    manualHours: 20,
    avgDealValue: 50000,
    hourlyRate: 500
  })

  const calculateROI = () => {
    const hoursSaved = Math.round(inputs.manualHours * 0.65) // 65% time reduction
    const additionalConversions = Math.round(inputs.inquiries * 0.65 * 0.30) // 65% more captured, 30% conversion
    const additionalRevenue = additionalConversions * inputs.avgDealValue
    const monthlySavings = hoursSaved * inputs.hourlyRate * 4 // Weekly to monthly
    const totalMonthlyValue = additionalRevenue + monthlySavings
    const implementationCost = 125000 // Average implementation cost
    const monthlyROI = Math.round((totalMonthlyValue / implementationCost) * 100)
    const paybackPeriod = Math.round(implementationCost / totalMonthlyValue)

    return {
      hoursSaved,
      additionalConversions,
      additionalRevenue,
      monthlySavings,
      totalMonthlyValue,
      monthlyROI,
      paybackPeriod
    }
  }

  const roi = calculateROI()

  const handleInputChange = (key, value) => {
    setInputs(prev => ({
      ...prev,
      [key]: Math.min(Math.max(value, 0), key === 'inquiries' ? 10000 : key === 'teamSize' ? 50 : 80)
    }))
  }

  const resetCalculator = () => {
    setInputs({
      inquiries: 100,
      teamSize: 5,
      manualHours: 20,
      avgDealValue: 50000,
      hourlyRate: 500
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-4">
          <Target className="w-4 h-4 mr-2" />
          <span className="font-semibold">ROI Calculator</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Calculate Your Potential Savings
        </h2>
        <p className="text-gray-600">
          Adjust the sliders to see how automation could impact your business
        </p>
      </div>

      {/* Input Controls */}
      <div className="space-y-8 mb-12">
        {[
          {
            label: "Monthly Inquiries",
            key: "inquiries",
            value: inputs.inquiries,
            min: 10,
            max: 1000,
            step: 10,
            suffix: "",
            icon: <TrendingUp className="w-5 h-5" />
          },
          {
            label: "Team Size",
            key: "teamSize",
            value: inputs.teamSize,
            min: 1,
            max: 50,
            step: 1,
            suffix: "people",
            icon: <Target className="w-5 h-5" />
          },
          {
            label: "Weekly Manual Hours",
            key: "manualHours",
            value: inputs.manualHours,
            min: 5,
            max: 80,
            step: 5,
            suffix: "hours",
            icon: <Clock className="w-5 h-5" />
          },
          {
            label: "Average Deal Value",
            key: "avgDealValue",
            value: inputs.avgDealValue,
            min: 1000,
            max: 500000,
            step: 5000,
            suffix: "KSh",
            icon: <DollarSign className="w-5 h-5" />
          },
          {
            label: "Hourly Rate (Savings)",
            key: "hourlyRate",
            value: inputs.hourlyRate,
            min: 200,
            max: 2000,
            step: 50,
            suffix: "KSh/hour",
            icon: <Clock className="w-5 h-5" />
          }
        ].map((input, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-gray-700 font-medium">
                <span className="text-[#0d9488] mr-2">{input.icon}</span>
                {input.label}
              </label>
              <div className="text-lg font-bold text-[#0d9488]">
                {input.value.toLocaleString()} {input.suffix}
              </div>
            </div>
            <input
              type="range"
              min={input.min}
              max={input.max}
              step={input.step}
              value={input.value}
              onChange={(e) => handleInputChange(input.key, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0d9488]"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>{input.min.toLocaleString()}</span>
              <span>{input.max.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <div className="flex justify-center mb-10">
        <Button
          variant="outline"
          onClick={resetCalculator}
          className="flex items-center text-[#0d9488] border-[#0d9488] hover:bg-[#f0fdfa]"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Calculator
        </Button>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center border border-gray-200">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">
            {roi.hoursSaved}h
          </div>
          <div className="text-gray-700 font-medium">Hours Saved/Week</div>
          <div className="text-sm text-gray-500 mt-2">
            Time your team gets back
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center border border-gray-200">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">
            +{roi.additionalConversions}
          </div>
          <div className="text-gray-700 font-medium">More Conversions</div>
          <div className="text-sm text-gray-500 mt-2">
            Additional deals per month
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center border border-gray-200">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">
            KSh {roi.totalMonthlyValue.toLocaleString()}
          </div>
          <div className="text-gray-700 font-medium">Monthly Value</div>
          <div className="text-sm text-gray-500 mt-2">
            Revenue + savings
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center border border-gray-200">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">
            {roi.paybackPeriod} mo
          </div>
          <div className="text-gray-700 font-medium">Payback Period</div>
          <div className="text-sm text-gray500 mt-2">
            Time to ROI
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Detailed Breakdown</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Additional Monthly Revenue</span>
            <span className="font-bold text-green-600">
              KSh {roi.additionalRevenue.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Monthly Time Savings Value</span>
            <span className="font-bold text-blue-600">
              KSh {roi.monthlySavings.toLocaleString()}
            </span>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-bold">Total Monthly Value</span>
              <span className="text-2xl font-bold text-[#0d9488]">
                KSh {roi.totalMonthlyValue.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Summary */}
      <div className="text-center">
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">Based on your inputs:</div>
          <div className="text-4xl font-bold text-[#0d9488] mb-2">
            {roi.monthlyROI}% Monthly ROI
          </div>
          <div className="text-gray-600">
            Return on investment after implementation
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0d9488]/10 to-teal-50 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-gray-900 mb-3">What this means for you:</h4>
          <ul className="space-y-2 text-left">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#0d9488] rounded-full mr-3"></div>
              <span className="text-gray-700">Get back {roi.hoursSaved} hours/week for your team</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#0d9488] rounded-full mr-3"></div>
              <span className="text-gray-700">Add KSh {roi.additionalRevenue.toLocaleString()}/month in new revenue</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#0d9488] rounded-full mr-3"></div>
              <span className="text-gray-700">Recoup investment in {roi.paybackPeriod} month{roi.paybackPeriod !== 1 ? 's' : ''}</span>
            </li>
          </ul>
        </div>

        <Button 
          size="lg"
          onClick={() => window.open('https://calendly.com', '_blank')}
          className="bg-gradient-to-r from-[#0d9488] to-[#1e3a8a] w-full md:w-auto"
        >
          Get Personalized ROI Analysis
        </Button>

        <p className="text-gray-500 text-sm mt-4">
          *Calculations based on average results from our clients. Your actual results may vary.
        </p>
      </div>
    </div>
  )
}

export default ROICalculator