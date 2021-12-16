import { Vue, Component, Prop } from 'vue-property-decorator'
import {QuestionSet} from '../../../Model/model'


@Component
export class QuestionFooter extends Vue {

@Prop()
data !:Array<QuestionSet>            
index !:number

public isResultDisabled : boolean = true;

previousIndex(index : number) : void{
    this.$emit('anyPreviousIndex', index )
}

nextIndex(index : number) : void{
    this.$emit('anyNextIndex', index )
}

changeRoute(route: string):void{
    this.$router.push(`/${route}`)
}

}