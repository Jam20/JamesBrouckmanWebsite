<template>
    <div id="HomePage">
        <div id="SectionOne">
            <img id="BackgroundImgOne" src="../assets/BackgroundOne.jpg"/>
            <div id="Title">
                <h1>James Brouckman</h1>
                <div id="line"/>
                <h2>Computer Engineering Student</h2>
            </div>
        </div>
        <div id="SectionTwo">
            <div id="ProjectsTitle">
                <h1>Recent Projects</h1>
            </div>
            <ExpandableList :inputData="githubData" v-slot:="slotProps">
                <div class="ProjectListItem" :style="{backgroundImage: 'url(' + require('../assets/projectImages/' + slotProps.itemData.name + '.jpg') + ')'}">
                    <div id="ProjectListItemTitle">
                        {{splitCamelCase(slotProps.itemData.name.replace(new RegExp('-','g')," "))}}
                    </div>
                    <div id="ProjectListItemLanguage">
                        {{slotProps.itemData.language}}
                    </div>
                    <div id="line2"/>
                     <div id="ProjectListItemUpdateDate">
                         {{formatDate(new Date(slotProps.itemData.updated_at))}}
                     </div>
                </div>
            </ExpandableList>
            
        </div>
    </div>
</template>
<script>
import TextBlurb from "../components/TextBlurb"
import ExpandableList from "../components/ExpandableList"


export default {
    components: {
        TextBlurb,
        ExpandableList
    },
    data() {return{
        githubData:[{"name":"loading1"},{"name":"loading2"},{"name":"loading3"},{"name":"loading4"},{"name":"loading5"},{"name":"loading6"}],
        readmeArray: []
    }},
    
    created: function(){
        fetch("https://api.github.com/users/Jam20/repos")
        .then(response => {
            return response.json()
            }).then(json => {
                json.sort(function(a,b){
                    var c = new Date(a.updated_at);
                    var d = new Date(b.updated_at);
                    return d-c;
                })
                
                this.githubData = json;
                
                });
        
    },

    computed: {
        
    },

    methods: {
        splitCamelCase: function(word) {
	        var output, i, l, capRe = /[A-Z]/;
	        if (typeof(word) !== "string") {
		        throw new Error("The \"word\" parameter must be a string.");
	        }
	        output = [];
	        for (i = 0, l = word.length; i < l; i += 1) {
		        if (i === 0) {
		    	    output.push(word[i].toUpperCase());
		        }
		     else {
		    	    if (i > 0 && capRe.test(word[i])) {
		        		output.push(" ");
		        	}
		    	    output.push(word[i]);
		        }
	        }
	        return output.join("");
        },
        formatDate: function(date){
            return date.toLocaleString('en-US')
        }
    },
}
</script>
<style scoped>
    @import url("../Variables.css");
    #HomePage{
        position: absolute;
        width: 100%;
        top: 0%;
        font-family: -'Segoe UI';
    }
    .InfoBlurb{
        position: absolute;
        top:20%;
        right:20%;
    }
    #Title{
        position: absolute;
        top: 45%;
        left:12.5%;
        color: var(--ForgroundPrimary)
    }
    #Title h1{
        font-size: 3vw;
        margin-bottom: 2%;
    }
    #Title h2{
        font-size: 1.5vw;
    }
    #line{
        width:100%;
        height: 3px;
        background-color: var(--ForgroundPrimary);
    } 
    #line2{
        position: relative;
        width:90%;
        top:27.5%;
        left: 50%;
        transform: translate(-50%,0);
        height: 3px;
        background-color: var(--ForgroundPrimary);
    } 
    #ProjectsTitle{
        width: 100%
    }
    #ProjectsTitle h1{
        position: relative;
        font-size: 25pt;
        color: var(--ForgroundPrimary);
        left:50%;
        transform: translate(-50%,0);
        width:fit-content;
    }
    #BackgroundImgOne{
        max-height:100vh;
        width: 100%;
        filter: brightness(80%)
    }

    .ProjectListItem{
        width: 300px;
        height: 300px;
        background-color: white;
        border-radius: 25%;
        vertical-align: center;
        background-size: 350px 350px;
        background-position: center;
    }

    #ProjectListItemTitle{
        position:relative;
        top: 20%;
        left:50%;
        transform: translate(-50%,0);
        width: fit-content;
        font-size: 20px;
    }
    #ProjectListItemLanguage{
        position: relative;
        top: 25%;
        left: 50%;
        transform: translate(-50%,0);
        width: fit-content;

    }
    #ProjectListItemUpdateDate{
        position: relative;
        top:79%;
        left: 50%;
        transform: translate(-50%,0);
        width: fit-content;
    }
    

</style>
