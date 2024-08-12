document.addEventListener("DOMContentLoaded", function() {
    let isOn = false;
    // COUNTRIES
    const afghanistan = document.getElementById("afghanistan");
    const albania = document.getElementById("albania");
    const algeria = document.getElementById("algeria");
    const angola = document.getElementById("angola");
    const argentina = document.getElementById("argentina");
    const armenia = document.getElementById("armenia");
    const australia = document.getElementById("australia");
    const austria = document.getElementById("austria");

    const flag = document.getElementById("flag");
    const name = document.getElementById("name");
    const shape = document.getElementById("shape");
    const size = document.getElementById("size");
    const birthday = document.getElementById("birthday");
    const capital = document.getElementById("capital");
    const funfact = document.getElementById("fun-fact");
    const animateButtons = document.querySelectorAll(".back");
    const contentElements = document.querySelectorAll(".content");
    const container = document.querySelector(".container");

    animateButtons.forEach(function(animateButton) {
        animateButton.addEventListener("click", function() {
          if(isOn){
            animateButton.style.animation = "none";
            void animateButton.offsetWidth;
            animateButton.style.animation = "animateButton 0.375s ease forwards";
            isOn = false;
            container.style.animation = "none";
            void container.offsetWidth;
            container.style.animation = "fadeOut 0.45s ease forwards";
          }
        });
    });
    
    contentElements.forEach(content => {
        content.addEventListener("click", () => {
            container.style.animation = "none";
            void container.offsetWidth;
            container.style.animation = "fadeIn 0.5s ease forwards";

            animateButtons.forEach(function(animateButton) {
                animateButton.style.animation = "none";
                void animateButton.offsetWidth;
                animateButton.style.animation = "fadeIn 0.5s ease forwards";
                
            });
        });
    });

    afghanistan.addEventListener("click", function() {
        display("afghanistan", "./flags/afghanistan.svg", "./outlines/afghanistan.svg", "Islamic Emirate of Afghanistan", "652,860 km²", "August 19, 1919", "Kabul", "Afghanistan has had 26 different flags in its history");
      });
    albania.addEventListener("click", function() {
        display("albania", "./flags/albania.svg", "./outlines/albania.svg", "Republic of Albania", "28,748 km²", "November 28, 1912", "Tirana", "There are 0 McDonalds and Starbucks");
      });
    algeria.addEventListener("click", function() {
        display("algeria", "./flags/algeria.svg", "./outlines/algeria.svg", "The People's Democratic Republic of Algeria", "2,381,741 km²", "July 3, 1962", "Algiers", "Algeria is the largest country in Africa by land area");
      });
    angola.addEventListener("click", function() {
        display("angola", "./flags/angola.svg", "./outlines/angola.svg", "The Republic of Angola", "1,246,700 km²", "November 11, 1975", "Luanda", "Half of its population is under 14");
      });
    argentina.addEventListener("click", function() {
        display("argentina", "./flags/argentina.svg", "./outlines/argentina.svg", "Argentine Republic", "2,780,400 km²", "July 9, 1816", "Buenos Aires", "Argentina consumes the most beef per person");
      });
    armenia.addEventListener("click", function() {
        display("armenia", "./flags/armenia.svg", "./outlines/armenia.svg", "The Republic of Armenia", "29,743 km²", "September 21, 1991", "Yerevan", "Armenia was the first country to adopt christianity as it's religion");
      });
    australia.addEventListener("click", function() {
        display("australia", "./flags/australia.svg", "./outlines/australia.svg", "The Commonwealth of Australia", "7,692,024 km²", "January 1, 1901", "Canberra", "Australia is the largest island in the world");
      });
    austria.addEventListener("click", function() {
        display("austria", "./flags/austria.svg", "./outlines/austria.svg", "The Republic of Austria", "83,879 km²", "October 26, 1955", "Vienna", "Vienna has the oldest zoo in the world which was founded in 1752");
      });
      
      function display(country, src, outline, govName, area, independance, gov, fact) {
        isOn = true;
        flag.src = src;
        shape.src = outline;
        name.textContent = govName;
        size.textContent = area;
        birthday.textContent = independance;
        capital.textContent = gov;
        funfact.textContent = fact;
        }
    }
);
