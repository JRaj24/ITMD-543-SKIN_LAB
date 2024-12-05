import React, { useState } from "react";
import quizData from "./quizData";
import productData from "./data";

const Quiz = () => {
  const [currentQues, setQues] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleClick = (selectedAns) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQues] = selectedAns;
    setAnswers(updatedAnswers);

    if (currentQues < quizData.length - 1) {
      setQues(currentQues + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateSkinType = () => {
    const scores = {
      "Oily Skin": 0,
      "Dry Skin": 0,
      "Combination Skin": 0,
      "Sensitive Skin": 0,
      "Normal Skin": 0,
    };

    answers.forEach((answer, index) => {
      switch (index) {
        case 0:
          if (answer === "Large and visible all over") scores["Oily Skin"]++;
          if (answer === "Small, not easily noticed all over") scores["Dry Skin"]++;
          if (answer === "Larger or medium and only visible in the T-zone")
            scores["Combination Skin"]++;
          break;
        case 1:
          if (answer === "Anytime I have blemishes") scores["Oily Skin"]++;
          if (answer === "Sometimes, but only around my cheeks")
            scores["Combination Skin"]++;
          if (answer === "Whenever and wherever I use new products")
            scores["Sensitive Skin"]++;
          break;
        case 2:
          if (answer === "Shiny in my T-zone but dull on my cheeks")
            scores["Combination Skin"]++;
          if (answer === "Bright like diamond") scores["Oily Skin"]++;
          if (answer === "Dull everywhere") scores["Dry Skin"]++;
          break;
        case 3:
          if (answer === "Oily in places and dry in others")
            scores["Combination Skin"]++;
          if (answer === "Slick and greasy") scores["Oily Skin"]++;
          if (answer === "Rough and scaly") scores["Dry Skin"]++;
          if (answer === "Irritated and angry") scores["Sensitive Skin"]++;
          break;
        case 4:
          if (answer === "Blotting or powder all over") scores["Oily Skin"]++;
          if (answer === "Moisturizing, moisturizing, moisturizing")
            scores["Dry Skin"]++;
          if (answer === "Blotting or powdering on the forehead, nose, and/or chin")
            scores["Combination Skin"]++;
          break;
        case 5:
          if (answer === "Clean, for now, but the oil is coming soon")
            scores["Oily Skin"]++;
          if (answer === "Stripped of moisture") scores["Dry Skin"]++;
          if (answer === "Itchy and a little bit dry") scores["Sensitive Skin"]++;
          break;
        case 6:
          if (answer === "I hate them, but they love me") scores["Oily Skin"]++;
          if (answer === "I'd trade my skin's flakiness and tightness for a few blackheads")
            scores["Dry Skin"]++;
          if (answer === "They have their territory around my T-zone, and I have claimed the cheeks for my own")
            scores["Combination Skin"]++;
          if (answer === "My blemishes are more likely to be broken capillaries or rashes")
            scores["Sensitive Skin"]++;
          break;
        case 7:
          if (answer === "Never, my skin feels oily most of the time")
            scores["Oily Skin"]++;
          if (answer === "Every day, especially after cleansing") scores["Dry Skin"]++;
          break;
        case 8:
          if (answer === "Uneven with large pores") scores["Oily Skin"]++;
          if (answer === "Rough with dry patches") scores["Dry Skin"]++;
          if (answer === "Smooth with few noticeable bumps") scores["Normal Skin"]++;
          break;
        case 9:
          if (answer === "My skin gets oily and shiny under the sun")
            scores["Oily Skin"]++;
          if (answer === "I burn easily and experience redness")
            scores["Sensitive Skin"]++;
          if (answer === "I tan easily without burning") scores["Normal Skin"]++;
          break;
        default:
          break;
      }
    });

    const highestScore = Math.max(...Object.values(scores));
    const topSkinTypes = Object.keys(scores).filter(
      (type) => scores[type] === highestScore
    );

    if (topSkinTypes.length > 1) {
      return topSkinTypes;
    }
    return topSkinTypes[0];
  };

  const recommendProducts = (skinTypes) => {
    const recommendedProducts = productData.filter((product) =>
      product.tags.some((tag) => skinTypes.includes(tag))
    );
    return recommendedProducts;
  };

  const skinType = quizCompleted ? calculateSkinType() : "";
  const productsToRecommend = quizCompleted ? recommendProducts(skinType) : [];

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-[#e1e2e5] min-h-screen">
      {quizCompleted ? (
        <div className="text-[#c49358] text-5xl font-semibold text-center mt-10">
          <h2>
            {Array.isArray(skinType)
              ? `Skin Type: Mixed (${skinType.join(", ")})`
              : `Skin Type: ${skinType}`}
          </h2>
          <div className="mt-5">
            <h3 className="text-3xl font-semibold">Recommended Products:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 px-6">
              {productsToRecommend.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-xl p-5 transform transition-all duration-300 ease-in-out hover:scale-105"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="text-xl font-semibold text-[#c49358]">{product.name}</h4>
                    <p className="text-sm mt-2 text-gray-600">{product.description}</p>
                    <p className="mt-3 text-lg font-semibold text-[#c49358]">₹{product.price}</p>
                    <button
                      className="bg-[#c49358] text-white py-2 px-4 mt-4 rounded-md text-sm shadow-md hover:bg-[#b07b45] hover:shadow-lg transition-all duration-200 ease-in-out"
                      onClick={() => alert(`Added ${product.name} to cart`)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-x-10 py-20">
          <h1 className="text-[#c49358] text-5xl font-semibold">Know Your Skin!</h1>
          <h2 className="text-[#c49358] text-3xl mt-16 m-3">{quizData[currentQues].question}</h2>
          <div className="border border-[#c49358] flex flex-col p-5 rounded-xl m-5 pl-10 pr-10">
            {quizData[currentQues].options.map((option, index) => (
              <button
                onClick={() => handleClick(option)}
                className="border border-[#c49358] text-[#c49358] w-96 font-bold px-4 py-3 m-3 rounded-full hover:bg-[#c49358] hover:text-white transition-all duration-300"
                key={index}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
