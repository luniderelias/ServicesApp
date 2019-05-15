import { DashboardInterface } from './../../../models/dashboard';
import { FirebaseService } from './../../../services/firebase.service';
import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import { OrderInterface } from 'src/app/models/order';

declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-eCommerce',
    templateUrl: './eCommerce.component.html',
    styleUrls: ['./eCommerce.component.scss']
})

export class EcommerceComponent {
    isAdmin: boolean;
    dashboard: DashboardInterface;
    orders: any[];
    constructor(private firebaseService: FirebaseService) {
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin';
        this.orders = [];
        this.getDashboardOrders();

        this.getDashboardGraphsData();
    }



    getDashboardOrders() {
        this.firebaseService.getDashboardOrders().snapshotChanges().subscribe(orders => {
            orders.forEach(item => {

                let a = item.payload.toJSON();
                a['$key'] = item.key;
                this.orders.push(a as OrderInterface);
        });
        });
    }

    getDashboardGraphsData() {
        this.firebaseService.getDashBoardData().snapshotChanges().subscribe(dashboard => {

            const res = dashboard.payload.val();

            if (dashboard.key != null || dashboard.key !== 'null') {
                res['$key'] = dashboard.key;
            }
            this.dashboard = res as DashboardInterface;

            console.log(this.dashboard.dailyRevenue);
            this.WidgetAreaChart2.data = this.dashboard.dailyRevenue;
            this.lineChart.data = this.dashboard.dailyRevenue;

            this.WidgetAreaChart3.data = this.dashboard.dailyOrders;
        });
    }

    // Line Chart Starts
    lineChart: Chart = {
        type: 'Line',
        data: data['line'],
        options: {
            low: 0,
            fullWidth: true,
            onlyInteger: true,
            chartPadding: {
                right: 20
            },
            axisY: {
                low: 0,
                scaleMinSpace: 60,
                labelInterpolationFnc: function labelInterpolationFnc(value) {
                    return value;
                },
            },
            axisX: {
                showGrid: false
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'linear1',
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(185,168,231, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(118,74,233, 1)'
                });
            },
            draw(data: any): void {
                if (data.type === 'point') {

                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: [10],
                        class: data.value.y === 0 || data.value.y === 6800 ? 'ct-circle-transperent' : 'ct-circle'
                    });
                    data.element.replace(circle);
                }
            }

        },
    };
    // Line Chart Ends


    // Widget Area chart 2 configuration Starts
    WidgetAreaChart2: Chart = {
        type: 'Line', data: data['WidgetAreaChart'],

        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 0,
                showLabel: false,
                offset: 0,
                scaleMinSpace: 10,
            },

            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true,
            targetLine: {
                value: 30,
                class: 'ct-target-line'
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient2',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(252,157,48, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(250,91,76, 1)'
                });

                // const targetLineX = data.chartRect.x1 + (data.chartRect.width() - (data.chartRect.width() / data.bounds.step))

                // data.svg.elem('line', {
                //     x1: targetLineX,
                //     x2: targetLineX,
                //     y1: data.chartRect.y1,
                //     y2: data.chartRect.y2
                // }, data.options.targetLine.class);

            },
        },
    };
    // Widget Area chart 2 configuration Ends

    // Widget Area chart 3 configuration Starts
    WidgetAreaChart3: Chart = {
        type: 'Line', data: data['WidgetAreaChart'],

        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 0,
                showLabel: false,
                offset: 0,
                scaleMinSpace: 10,
            },

            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true,
            targetLine: {
                value: 30,
                class: 'ct-target-line'
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient3',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(120, 204, 55, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(0, 75, 145, 1)'
                });

            },
        },
    };
    // Widget Area chart 3 configuration Ends


}
