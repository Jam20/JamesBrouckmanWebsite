<template>
    <div id="About">
    
        <div id="SkillsSection">
            <div class="sectionTitle">
                <h2>Skills</h2>
                 
            </div> 
            <SelectionViewOption title="Test" imageURL="codeBackground"/>
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

export default {
    components: {
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
        left: 42vw;
    }
    .sectionTitle h2{
        font-size: 3vw;
        color: black;
    }
    #SkillsSection{
        width: 100%;
    }

</style>