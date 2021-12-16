import { Vue, Component, Watch } from "vue-property-decorator";
import axios from "axios";
import {Apitrial} from '../../Model/model'
// import VueAxios from 'vue-axios'
import AboutComponent from "../aboutcomponent/AboutComponent.vue";

// @Component(
//     {
//         component:{
//             AboutComponent
//         }
//     }
// )

@Component({
    components: {
        "about-comp":AboutComponent
    }
})
export class Trial extends Vue {
  public message: string = "Hey this is a message";
  public posts: Array<Apitrial> = [] ;
  changnum(): void {
    this.message = "This is a new message";
  }

  @Watch("message")
  watchmsg(val: any): void {
    console.log(val);
  }

beforeMount(){
    console.log("beforeMount")
}

mounted(){
    console.log("mouonted")
}

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log("response ->", response);
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("created")
  }

changnumdd(): void {
console.log("newfun")
  }
}
