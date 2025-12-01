import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import styles from '../style';
import {insertData} from '../utils/supabase-client';

const Calculator = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [form, setForm] = useState({
    feet: "",
    inches: "",
    weight: "",
    gender: "",
    age: "",
    activityLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const [result, setResult] = useState(null);
  const [macros, setMacros] = useState(null);
  
  const handleSubmit = async (e) => {
    console.log("Form data:", form);
    e.preventDefault();
    setLoading(true);

    try {
      const height = (parseFloat(form.feet) * 12 + parseFloat(form.inches)) * 2.54; // convert to cm
      const weight = parseFloat(form.weight) * 0.453592; // in kg
      const age = parseFloat(form.age);
      const activityLevel = parseFloat(form.activityLevel);
      let calories = 0;
      
      if (form.gender === 'male') {
        calories = (10 * weight) + (6.25 * height) - (5 * age) + 5;
      } else if (form.gender === 'female') {
        calories = (10 * weight) + (6.25 * height) - (5 * age) - 161;
      } else {
        calories = (10 * weight) + (6.25 * height) - (5 * age) - 78;
      }

      let finalCalories = (calories * activityLevel).toFixed(0)
      setResult([
        `${finalCalories} cal  (basal metabolic rate)`,
        `${finalCalories - 250} cal (mild deficit)`,
        `${finalCalories - 500} cal (moderate deficit)`,
        `${finalCalories - 1000} cal (aggressive deficit)`
      ]);

      let proteinIntake = (weight * 0.8).toFixed(0) + "g - " + (weight * 1.2).toFixed(0) + "g";
      let carbIntake = (finalCalories * 0.5 / 4).toFixed(0) + "g";
      let sugarIntake = (finalCalories * 0.1 / 4).toFixed(0) + "g";
      let fatIntake = (finalCalories * 0.3 / 9).toFixed(0) + "g";
      let saturatedFatIntake = (finalCalories * 0.1 / 9).toFixed(0) + "g";
      let fiberIntake = (weight * 0.014).toFixed(0) + "g";


      setMacros([proteinIntake, carbIntake, sugarIntake, fatIntake, saturatedFatIntake, fiberIntake]);
      setShowResult(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const [currentResultIndex, setCurrentResultIndex] = useState(0);

  return (
    <section id="calculator" className={`flex-center ${styles.paddingProjectsY}`}>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="calorie calculator"
          above="Mifflin-St Jeor Equation 🍪"
          sub="calculate your daily caloric goals!"
        />
        <div className="text-white flex justify-center">
          <div className="max-w-md w-full">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-3"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      id="feet"
                      name="feet"
                      value={form.feet || ""}
                      onChange={handleChange}
                      placeholder="feet"
                      required
                      min="1"
                      max="8"
                      step="1"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      }}
                      className="w-1/2 text-black rounded-lg px-3 py-2"
                    />
                    <input
                      type="number"
                      id="inches"
                      name="inches"
                      value={form.inches || ""}
                      onChange={handleChange}
                      placeholder="inches"
                      required
                      min="0"
                      max="11"
                      step="1"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      }}
                      className="w-1/2 text-black rounded-lg px-3 py-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    placeholder="weight?"
                    required
                    min="1"
                    step="1"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                    className="w-full text-black rounded-lg px-3 py-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="age?"
                    required
                    min="1"
                    max="120"
                    step="1"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                    className="w-full text-black rounded-lg px-3 py-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <select
                    id="gender"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                    className="w-full text-black rounded-lg px-3 py-2"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    value={form.activityLevel}
                    onChange={handleChange}
                    required
                    className="w-full text-black rounded-lg px-3 py-2"
                  >
                    <option value="">Select activity level</option>
                    <option value="1">BMR (Basal Metabolic Rate)</option>
                    <option value="1.2">Sedentary (little/no exercise)</option>
                    <option value="1.375">Light activity (light exercise 1-3 days/week)</option>
                    <option value="1.55">Moderate activity (moderate exercise 3-5 days/week)</option>
                    <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
                    <option value="1.9">Extra active (very hard exercise, physical job)</option>
                  </select>
                </div>

                {showResult && result && (
                  <div 
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative cursor-pointer hover:bg-green-200 transition-colors"
                    onClick={() => setCurrentResultIndex((prev) => (prev + 1) % result.length)}
                  >
                    <span className="block sm:inline">
                      {result[currentResultIndex]}
                    </span>
                    <div className="text-xs mt-1 opacity-75">
                      click to cycle! ({currentResultIndex + 1}/{result.length})
                    </div>
                  </div>
                )}
                {showResult && macros && (
                  <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
                    <div className="flex flex-col gap-1">
                      <span className="block font-semibold">
                        protein intake: {macros[0]}
                      </span>
                      <div className="text-xs opacity-75">
                        based on 0.8 - 1.2g per kg of body weight
                      </div>
                      <span className="block font-semibold">
                        carbs: {macros[1]}
                      </span>
                      <span className="block font-semibold">
                        sugars: {macros[2]}
                      </span>
                      <span className="block font-semibold">
                        fats: {macros[3]}
                      </span>
                      <span className="block font-semibold">
                        saturated fats: {macros[4]}
                      </span>
                      <span className="block font-semibold">
                        fiber: {macros[5]}
                      </span>
                      <div className="text-xs opacity-75">
                        based on 0.014g per 1000cal consumed
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name || ""}
                        onChange={handleChange}
                        placeholder="name/username"
                        className="w-full text-gray-500 bg-gray-200 rounded-lg px-3 py-2"
                      />
                      {(!form.name || form.name.trim() === "") && (
                        <div className="text-xs text-red-500">
                          Please enter your name first to save your stats
                        </div>
                      )}
                      <button
                        onClick={() => insertData({ username: form.name, macros: macros })} 
                        type="button"
                        style={{ pointerEvents: (!form.name || form.name.trim() === "") ? 'none' : 'auto' }}
                        className={`mt-2 w-full border border-blue-400 px-4 py-3 rounded font-semibold transition-colors ${
                          !form.name || form.name.trim() === ""
                            ? "bg-gray-300 text-gray-500 opacity-50"
                            : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                        }`}
                      >
                        💾 wanna save your stats?
                      </button>
                    </div>
                  </div>
                )}

                <button 
                  type="submit"
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none shadow-lg hover:shadow-xl"
                  style={{ animationDuration: '3s' }}
                  disabled={loading}
                >
                  <div className="relative z-10">
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        calculating...
                      </div>
                    ) : (
                      "✨ calculate calories"
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
