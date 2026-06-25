// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Tiny Chemistry configuration.
 *
 * @module      tiny_chemistry/configuration
 * @copyright   2022 Huong Nguyen <huongnv13@gmail.com>
 * This plugin based on tiny_equation from Huong Nguyen <huongnv13@gmail.com> was adapted for tiny_chemistry for Moodle 4.5
 * by Teaching and Learning Center (TLC, tlc@fh-ooe.at), FH Upper Austria
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {component as buttonName} from 'tiny_chemistry/common';
import {
    addMenubarItem,
    addToolbarButton,
    addToolbarSection,
} from 'editor_tiny/utils';

const configureToolbar = (toolbar) => {
    addToolbarSection(toolbar, 'chemistry', 'lists', true);
    return addToolbarButton(toolbar, 'chemistry', buttonName);
};

export const configure = (instanceConfig) => {
    // Update the instance configuration to add the Chemistry menu option to the menus and toolbars.
    return {
        menu: addMenubarItem(instanceConfig.menu, 'insert', buttonName),
        toolbar: configureToolbar(instanceConfig.toolbar),
    };
};
