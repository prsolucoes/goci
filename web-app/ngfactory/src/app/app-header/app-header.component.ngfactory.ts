/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../src/app/app-header/app-header.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../../src/app/services/GlobalService';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './app-header.component.css.shim';
import * as import12 from '@angular/router/src/directives/router_link';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/security';
var renderType_AppHeaderComponent_Host:import0.RenderComponentType = (null as any);
class _View_AppHeaderComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AppHeaderComponent_0_4:import3.AppHeaderComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppHeaderComponent_Host0,renderType_AppHeaderComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-header',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppHeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppHeaderComponent_0_4 = new import3.AppHeaderComponent(this.parentInjector.get(import8.GlobalService));
    this._appEl_0.initComponent(this._AppHeaderComponent_0_4,[],compView_0);
    compView_0.create(this._AppHeaderComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AppHeaderComponent) && (0 === requestNodeIndex))) { return this._AppHeaderComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AppHeaderComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AppHeaderComponent_Host === (null as any))) { (renderType_AppHeaderComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_AppHeaderComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppHeaderComponentNgFactory:import10.ComponentFactory<import3.AppHeaderComponent> = new import10.ComponentFactory<import3.AppHeaderComponent>('app-header',viewFactory_AppHeaderComponent_Host0,import3.AppHeaderComponent);
const styles_AppHeaderComponent:any[] = [import11.styles];
var renderType_AppHeaderComponent:import0.RenderComponentType = (null as any);
class _View_AppHeaderComponent0 extends import1.AppView<import3.AppHeaderComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _RouterLinkWithHref_18_3:import12.RouterLinkWithHref;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _RouterLinkWithHref_30_3:import12.RouterLinkWithHref;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _el_42:any;
  _RouterLinkWithHref_42_3:import12.RouterLinkWithHref;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppHeaderComponent0,renderType_AppHeaderComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'nav',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','navbar navbar-default navbar-fixed-top');
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','container-fluid');
    this._text_3 = this.renderer.createText(this._el_2,'\n		',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','navbar-header');
    this._text_5 = this.renderer.createText(this._el_4,'\n			',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'button',(null as any));
    this.renderer.setElementAttribute(this._el_6,'aria-controls','navbar');
    this.renderer.setElementAttribute(this._el_6,'aria-expanded','false');
    this.renderer.setElementAttribute(this._el_6,'class','navbar-toggle collapsed');
    this.renderer.setElementAttribute(this._el_6,'data-target','#nav-collapse');
    this.renderer.setElementAttribute(this._el_6,'data-toggle','collapse');
    this.renderer.setElementAttribute(this._el_6,'type','button');
    this._text_7 = this.renderer.createText(this._el_6,'\n				',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'span',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','sr-only');
    this._text_9 = this.renderer.createText(this._el_8,'Toggle navigation',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n				',(null as any));
    this._el_11 = this.renderer.createElement(this._el_6,'span',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','icon-bar');
    this._text_12 = this.renderer.createText(this._el_6,'\n				',(null as any));
    this._el_13 = this.renderer.createElement(this._el_6,'span',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','icon-bar');
    this._text_14 = this.renderer.createText(this._el_6,'\n				',(null as any));
    this._el_15 = this.renderer.createElement(this._el_6,'span',(null as any));
    this.renderer.setElementAttribute(this._el_15,'class','icon-bar');
    this._text_16 = this.renderer.createText(this._el_6,'\n			',(null as any));
    this._text_17 = this.renderer.createText(this._el_4,'\n			',(null as any));
    this._el_18 = this.renderer.createElement(this._el_4,'a',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','navbar-brand');
    this.renderer.setElementAttribute(this._el_18,'href','javascript: void(0);');
    this.renderer.setElementAttribute(this._el_18,'routerLink','/home');
    this._RouterLinkWithHref_18_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_19 = this.renderer.createText(this._el_18,'\n				',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'img',(null as any));
    this.renderer.setElementAttribute(this._el_20,'alt','');
    this.renderer.setElementAttribute(this._el_20,'border','0');
    this.renderer.setElementAttribute(this._el_20,'class','logo pull-left');
    this.renderer.setElementAttribute(this._el_20,'src','/src/static/images/logo-header.png');
    this._text_21 = this.renderer.createText(this._el_18,'\n				GoCI\n			',(null as any));
    this._text_22 = this.renderer.createText(this._el_4,'\n		',(null as any));
    this._text_23 = this.renderer.createText(this._el_2,'\n		',(null as any));
    this._el_24 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','collapse navbar-collapse');
    this.renderer.setElementAttribute(this._el_24,'id','nav-collapse');
    this._text_25 = this.renderer.createText(this._el_24,'\n\n			',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','nav navbar-nav navbar-right');
    this._text_27 = this.renderer.createText(this._el_26,'\n				',(null as any));
    this._el_28 = this.renderer.createElement(this._el_26,'li',(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'\n					',(null as any));
    this._el_30 = this.renderer.createElement(this._el_28,'a',(null as any));
    this.renderer.setElementAttribute(this._el_30,'href','javascript: void(0);');
    this.renderer.setElementAttribute(this._el_30,'routerLink','/job/list');
    this._RouterLinkWithHref_30_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_31 = this.renderer.createText(this._el_30,'\n						',(null as any));
    this._el_32 = this.renderer.createElement(this._el_30,'span',(null as any));
    this.renderer.setElementAttribute(this._el_32,'class','ph-job-running-list-count');
    this._text_33 = this.renderer.createText(this._el_32,'',(null as any));
    this._text_34 = this.renderer.createText(this._el_30,'\n						',(null as any));
    this._el_35 = this.renderer.createElement(this._el_30,'span',(null as any));
    this.renderer.setElementAttribute(this._el_35,'class','ph-job-running-list-text');
    this._text_36 = this.renderer.createText(this._el_35,'jobs',(null as any));
    this._text_37 = this.renderer.createText(this._el_30,'\n					',(null as any));
    this._text_38 = this.renderer.createText(this._el_28,'\n				',(null as any));
    this._text_39 = this.renderer.createText(this._el_26,'\n				',(null as any));
    this._el_40 = this.renderer.createElement(this._el_26,'li',(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'\n					',(null as any));
    this._el_42 = this.renderer.createElement(this._el_40,'a',(null as any));
    this.renderer.setElementAttribute(this._el_42,'href','javascript: void(0);');
    this.renderer.setElementAttribute(this._el_42,'routerLink','/home');
    this._RouterLinkWithHref_42_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_43 = this.renderer.createText(this._el_42,'Home',(null as any));
    this._text_44 = this.renderer.createText(this._el_40,'\n				',(null as any));
    this._text_45 = this.renderer.createText(this._el_26,'\n			',(null as any));
    this._text_46 = this.renderer.createText(this._el_24,'\n\n		',(null as any));
    this._text_47 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._text_48 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_18,'click',this.eventHandler(this._handle_click_18_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_30,'click',this.eventHandler(this._handle_click_30_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_42,'click',this.eventHandler(this._handle_click_42_0.bind(this)));
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._text_48
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._RouterLinkWithHref_18_3; }
    if (((token === import12.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 37)))) { return this._RouterLinkWithHref_30_3; }
    if (((token === import12.RouterLinkWithHref) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._RouterLinkWithHref_42_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = '/home';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_18_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_18_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_4:any = '/job/list';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkWithHref_30_3.routerLink = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_30_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_8:any = '/home';
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._RouterLinkWithHref_42_3.routerLink = currVal_8;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_8,currVal_8);
      this._expr_8 = currVal_8;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_42_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_18_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_18,'href',this.viewUtils.sanitizer.sanitize(import16.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = this._RouterLinkWithHref_30_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_30,'href',this.viewUtils.sanitizer.sanitize(import16.SecurityContext.URL,currVal_5));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import4.interpolate(1,'',this.context.jobs,'');
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_33,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_9:any = this._RouterLinkWithHref_42_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementProperty(this._el_42,'href',this.viewUtils.sanitizer.sanitize(import16.SecurityContext.URL,currVal_9));
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_18_3.ngOnDestroy();
    this._RouterLinkWithHref_30_3.ngOnDestroy();
    this._RouterLinkWithHref_42_3.ngOnDestroy();
  }
  private _handle_click_18_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_18_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_30_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_30_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_42_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_42_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AppHeaderComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AppHeaderComponent> {
  if ((renderType_AppHeaderComponent === (null as any))) { (renderType_AppHeaderComponent = viewUtils.createRenderComponentType('/Users/paulo/Developer/workspaces/go/src/github.com/prsolucoes/goci/web-app/src/app/app-header/app-header.component.html',0,import9.ViewEncapsulation.Emulated,styles_AppHeaderComponent,{})); }
  return new _View_AppHeaderComponent0(viewUtils,parentInjector,declarationEl);
}