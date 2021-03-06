import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-circle-graph',
  templateUrl: './circle-graph.component.html',
  styleUrls: ['./circle-graph.component.css']
})

export class AppCircleGraph {
    view: any[];
    
    @Input() data: any[];
    @Input() scheme: any = {
        domain: ['#2E8540','#D7EAD3']
    };
    @Input() customColors: object;
    @Input() animations: boolean;
    @Input() labels: boolean;
    @Input() trimLabels: boolean;
    @Input() maxLabelLength: number;
    @Input() explodeSlices: boolean;
    @Input() doughnut: boolean;
    @Input() arcWidth: number;
    @Input() gradient: boolean;
    @Input() tooltipDisabled: object;
    @Input() title;
    @Input() tableSummary;
    @Input() legendTitle;
    @Input() legendDate;
    @Input() firstColumnName;
    @Output() select;
    @Output() activate;
    @Output() deactivate;
    tooltipText;
    tooltipTemplate;
    labelFormatting;
    totalValues: number = 0;
    centerNum;
    
    ngOnInit(){
        this.resize();
        
        let rate;
        
        (this.data).map(x => {
            this.totalValues += x.value;
            
            (x.attr && x.attr === 'rate')? rate = x.value : null;
        });
        
        this.centerNum = Math.floor(100 * (rate / this.totalValues)) + '%';
    }
   
    resize() {
        let graphContainer = document.getElementsByClassName("circleGraphShell")[0].clientWidth;
        this.view = [graphContainer, graphContainer / 2];
        
        this.setPosition(graphContainer / 2);
    }
    
    setPosition(height) {
            let circle = document.querySelectorAll('.circleGraphShell')[0].getBoundingClientRect();
            let text = document.getElementById('centerText').style;
            let sub = document.getElementById('subText').style;
            
                sub.width = circle.width + 'px';
                text.width = circle.width + 'px';
                text.top = height/2 - 25 + 'px';
    }
    
    labelFormat() {
    }
    
    toolTipFormat() {
    }
    
    onSelect(e) {
//        console.log(e);
    }
    
    onActivate(e) {
//        console.log(e);
    }
        
    onDeactivate(e) {
//        console.log(e);
    }
}