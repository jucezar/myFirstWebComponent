
// importando a biblioteca do lightning do salesforce e a iterator @track
import { LightningElement, track } from 'lwc';

//criando a classe MyFirstWebComponent herdando do lightningElement
export default class MyFirstWebComponent extends LightningElement {

    @track
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}