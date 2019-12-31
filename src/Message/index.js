import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { notification } from '../plugins/noty';

export default class MessageComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtPassword: '',
            messageStatus: false,
            disabled: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleViewMessage = this.handleViewMessage.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleViewMessage(e){
        e.preventDefault();
        this.setState({disabled: true})
        if(this.state.txtPassword === "anjaganda2020"){
            setTimeout(() => {
                notification("success", `<i class = "fa fa-check"></i> Success`)
                this.setState({messageStatus: true})
                this.setState({disabled: false})    
            }, 500);
            
        }else{
            setTimeout(() => {
                notification("error", `<i class = "fa fa-remove"></i> Invalid password`)
                this.setState({messageStatus: false})
                this.setState({disabled: false})
            }, 500);
            
            
        }
    }

    render() {
        return (
            <div>
                <div className = "center-align">
                    <img src = {process.env.PUBLIC_URL + '/home/stitch.gif'} className = "img-fluid"/>
                </div>
                <hr/>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-12">
                            <p>Michael's message,</p>
                            <div class="alert alert-dismissible alert-secondary">
                                {this.state.messageStatus ? 
                                    <div>
                                        <p>
                                            Happy 2020 po anjanette!!! 🎉🎊 grabe no sobrang daming nangyari etong taon na ito
                                            para sa akin isa to sa mabigat na taon sakin hehe but still thankful ako 
                                            kay Lord kasi ganun pa man may blessings padin and yung guidance sobrang palaging nandyan
                                        </p>
                                        
                                        <p>
                                            Ngayon 2020 na madami akong plans at kasama ka sa mga plano ko na iyon 😊 . and it's not just na pangsarili lang na plano
                                            pinagdadasal ko lahat sa Kanya. Lalo na yung pagaaral mo though di ko alam kung tapos kana sa pinapagawa ng prof mo 😏😏 hahhaha
                                            sana kahit papano di kana ma-late 😂 at alam ko naman ginagawa mo yung best effort para don. 😉
                                        </p>
                                     
                                        <p>
                                        Then yung sa family mo, sobrang sinubok ka etong 2019 anja at ramdam ko lahat ng sufferings mo mula sa papa mo kay ate bon, yung mga bagay na masasakit at madami pang iba. 
                                        sobra kong namamangha sa katulad mo 😊. alam mo kung bakit? kasi despite lahat ng pinagdadaanan mo sa lahat ng naririnig mo nandyan kapa din ikaw lang kilala kong ganyan!! may times na naiiyak ako kasi bat ganun yung napagdadaanan mo parang nararamdaman ko yung bigat. <br/>
                                        ang tangi ko lang nagagawa nung mga time na yun is pag-pray ka, yes po pinagpra-pray kita ikaw lang yung sobrang nabababad ko sa panalangin bukod sa pamilya ko. 
                                        hindi ko alam kung bakit pero palagi kitang pinagdadasal bigla nalang kapag lumalambot yung puso ko pag nagpra-pray nababanggit nalang kita kaya kahit anong mangyari nandito lang ako para sayo kasi ibang iba tong nararamdaman ko eh seryoso :))
                                        </p>
                                                      
                                        <p>
                                            Yyung sa part na masaya tong taon na ito. yun yung nag confess ako sayo at yung naging totoo ako sa sarili ko 😊💙💙. kasi duwag talaga ako anja duwag na takot pero for some reason heto ako dumadating sa point na gusto kong pagsigawan sa lahat yung nararamdaman ko 💙
                                            palagi akong magpapasalamat sa Lord kasi kumbaga ilang months nalang mag new year na then nangyari to. never kong inisip sa buong buhay ko na alam mo na masasabi ko sayong mahal kita. lahat to alam ko panaginip lang alam mo yan diba? at dream girl talaga kita anjanette 😭😭
                                            ikaw yung babaeng pinapangarap ko 😭. na sobrang saya kapag kausap ka, nakapag nakukurot ko pisngi mo ang saya lang at makita ko yung aura mo na goodvibes hays lalo kong naiinlove at yung mas nagpapatindi pa don yung faith mo.
                                            sabi ko nga sa sarili ko bonus nalang na maganda ka para sakin kasi ang ganda ng inside mo eh swear ❤️
                                        </p>

                                        <p>
                                            Alam kong nasa part ka ng moving on sa masasakit na nangyari sayo. I'm looking forward na makita mo yung peace sa puso mo, yung gaan, na bumalik yung anja na walang dinadalang pain siguro mas astig non kasi nga eto palang may mga pain kang nararanasan ang astig ng pagkatao mo. pano pa kaya kapag sobrang okay kana hehe 😍 .
                                            at habang di kapa okay nandito lang si ako :) sabi ko sayo maghihintay ako at pagpasok netong taon na ito ipapaalam kita kay ate aimee and kung gusto din nyang ipaalam ko kay ate cris why not, ipaglalaban ko tong nararamdaman ko, magtatake ako ng risks sana pagbigyan mo ako na humigit pa sa friends syempre kapag okay kana and eventually you will 😊😊. 
                                            ayaw kong gumawa ng move ngayon na alam kong di pa okay si puso mo. <br/>
                                            I'm going to be a positive guy this time etong meron tayo 😊😊. magiging positive lang ako sa lahat ng mangyayari at pagdadaanan natin hehe and if ever man na dumating ka sa point na re-reject mo ko bahala na kung ano mangyayari basta ang alam ko mahalaga ka sakin. sobrang mahalaga <br/>
                                            at kung maging tayo? kung pagbigyan tayo ng Lord? haaayyy sinasabi ko na sa sarili ko dati pa na hindi ko na to papakawalan 😉 kasi nga ikaw yung pinapangarap ko eh 😭 though napapanaginipan kita ultimo pagbili ng kwekwek nasa panaginip ko pa na kasama ka HAHAHAHAHA weird talaga 😂😂😂😂 
                                            
                                        </p>

                                        <p>
                                            and i want to set the record straight na etong paghihintay ko wala to sa plano ko talaga pero sayo talaga ko binabalik eh 😍😍 <br/>
                                            kaya salamat sa time non na nakausap kita ng napakahaba inabot tayo ng 5am sabi mo wahahaha 😂 at salamat everytime na magkausap tayo, sa pagpupuyat natin makapagusap lang, sa video calls, sa church, sa pagkukurot ko sayo, sa pagcha-chat sakin, at sa pagka-toyo mo syempre 😂😂😂 HAHAHAHA kasi dun kita mas nakikilala and ayos lang sakin yon susuyuin at susuyuin padin kita hehe okay? 😉
                                        </p>
                                        <p>
                                            ang haba hindi ko alam kung aabot ka dito sa part ng message ko na ito basta thankful akong may anjanette sa buhay ko ngayon at alam natin yung talagang totoo, nandito ko iintindihin ka palagi 😊😊 <br/>
                                            may share lang akong verse sayo na kahit anong mangyari may pag-asa kapag sa kahit anong problema may Diyos 😊 <br/>
                                            <div className = "alert alert-info"> <b>Romans 15:13</b> - “Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope, in the power of the Holy Spirit.” </div>
                                        </p>


                                        <p>
                                        ayun lang masasabi ko sayo, lang eh no sorna haba talaga HAHAHA😂😂. pasensya na sa gawa ko ah? balak ko iimprove to in the near future hehe kumbaga dito ko lalagay lahat ng nangyayari at mangyayari sating dalawa sana balik kapadin dito sa website na to hehe 😊 <br/>
                                        kung nabasa mo man hanggang dulo maraming salamat sa time 😍😍 <br/>
                                        lagi ko tong sinasabi na <b>mahal na mahal na mahal na mahal na mahal kita!!!😊😍😍💓💙</b> at may actions na akong ginagawa 😊 at madami pa sa mga susunod pa :)) <br/>
                                        looking forward for healing, peace, hope at lahat pa this year para sayo anjanette!❤️ iingatan, aalagaan at mas pahahalagahan pa kita 💙❤️<br/>
                                        Happy new year. have a blast!!🎉🎉 be happy lang at all times. ILOVEYOU!! 💓
                                        </p>
                                        <p>
                                            PS: sorry pala kung mga nakaraang araw at kanina medyo matagal ko mag reply. eto kasi yung ginagawa ko hehe wag na magalit o magtampo 😏✌🏼✌🏼😊😂. <br/>
                                            THANKYOOUUUU. iloveyou po lizaaaa!!! 💙😍😍
                                        </p>
                                    </div>
                                : 
                                <form onSubmit = {this.handleViewMessage}>
                                    <div className = "form-group">
                                        <label>Password</label>
                                        <input type = "password" name = "txtPassword" value = {this.state.txtPassword} onChange = {this.handleChange} className = "form-control" placeholder = "Input password" disabled = {this.state.disabled}/>
                                    </div>
                                    <div className = "form-group">
                                        <button type = "submit" className = "btn btn-primary" disabled = {this.state.disabled}> {this.state.disabled == true ? <div><div className="spinner-border" role="status"> <span className="sr-only">Loading...</span></div> </div> : <div><FontAwesomeIcon icon = {faCheck}/> Submit</div>} </button>
                                    </div>
                                </form>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
