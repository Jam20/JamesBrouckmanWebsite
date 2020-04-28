<template>
    <div id="About">
    
        <div id="SkillsSection">
            <div class="sectionTitle">
                <h2>Skills</h2>
                 
            </div> 
            <SelectionView :SelectorData="skillData" :SelectionOptionData ="skillContent"/>   

        </div>
        
        <div id="ExperienceSection">
            <div class="sectionTitle">
                <h2>Experience</h2>
            </div> 
        </div>
        
        <div id="EducationSection">
            <div class="sectionTitle">
            </div> 
        </div>
        
        <div id="ExtraCurricularSection">
            <div class="sectionTitle">
            </div> 
        </div>
    
    </div>
</template>
<script>
import SelectionViewOption from "../components/SelectionViewOption"
import SelectionView from "../components/SelectionView"

export default {

    data:function(){ return{
        skillData: [
            {title: "Programming", imageURL: require("../assets/CodeBackground.jpg"), color: "black"},
            {title: "Electrical", imageURL: require("../assets/TestBackground.jpg"), color: "blue"},
            {title: "OtherSkill", imageURL: require("../assets/BackgroundTwo.jpg"), color: "green"}
            ],
        skillContent: [
            {imageURL: require("../assets/CodeBackground.jpg")},
            {imageURL: require("../assets/TestBackground.jpg")},
            {imageURL: require("../assets/BackgroundTwo.jpg")}
        ]
    }},

    components: {
        SelectionView,
        SelectionViewOption
    }
}
</script>

<style scoped>
    #About{
        font-family: -'Segoe UI';
    }
    #IntroSection{
        
        width:100%;
        height:50vh
    }

    .sectionTitle{
        position: relative;
        top:5%;
        left: 0%;
    }
    .sectionTitle h2{
        position: relative;
        font-size: 3vw;
        text-align: center;
        width: 20%;
        left: 40%;
        color: black;
    }
    #SkillsSection{
        width: 100%;
    }

</style>