/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ClarityModule} from 'clarity-angular';

import {DatagridBasicStructureDemo} from "./basic-structure/basic-structure";
import {DatagridBatchActionDemo} from "./batch-action/batch-action";
import {DatagridBindingPropertiesDemo} from "./binding-properties/binding-properties";
import {DatagridCustomRenderingDemo} from "./custom-rendering/custom-rendering";
import {DatagridFilteringDemo} from "./filtering/filtering";
import {DatagridFullDemo} from "./full/full";
import {DatagridPaginationDemo} from "./pagination/pagination";
import {DatagridSelectionDemo} from "./selection/selection";
import {DatagridSelectionSingleDemo} from "./single-selection/single-selection";
import {DatagridServerDrivenDemo} from "./server-driven/server-driven";
import {DatagridSingleActionDemo} from "./single-action/single-action";
import {DatagridSmartIteratorDemo} from "./smart-iterator/smart-iterator";
import {DatagridSortingDemo} from "./sorting/sorting";
import {DatagridStringFilteringDemo} from "./string-filtering/string-filtering";
import {DatagridPlaceholderDemo} from "./placeholder/placeholder";

import {ColorFilter} from "./utils/color-filter";
import {Example} from "./utils/example";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        DatagridBasicStructureDemo,
        DatagridBatchActionDemo,
        DatagridBindingPropertiesDemo,
        DatagridCustomRenderingDemo,
        DatagridFilteringDemo,
        DatagridFullDemo,
        DatagridPaginationDemo,
        DatagridSelectionDemo,
        DatagridSelectionSingleDemo,
        DatagridServerDrivenDemo,
        DatagridSingleActionDemo,
        DatagridSmartIteratorDemo,
        DatagridSortingDemo,
        DatagridStringFilteringDemo,
        DatagridPlaceholderDemo,
        ColorFilter,
        Example
    ],
    exports: [
        DatagridBasicStructureDemo,
        DatagridBatchActionDemo,
        DatagridBindingPropertiesDemo,
        DatagridCustomRenderingDemo,
        DatagridFilteringDemo,
        DatagridFullDemo,
        DatagridPaginationDemo,
        DatagridSelectionDemo,
        DatagridSelectionSingleDemo,
        DatagridServerDrivenDemo,
        DatagridSingleActionDemo,
        DatagridSelectionSingleDemo,
        DatagridSmartIteratorDemo,
        DatagridSortingDemo,
        DatagridStringFilteringDemo,
        DatagridPlaceholderDemo
    ]
})
export default class ModalDemoModule {
}