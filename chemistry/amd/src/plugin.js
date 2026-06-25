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
 * Tiny Chemistry plugin for Moodle.
 *
 * @module      tiny_chemistry/plugin
 * @copyright   2022 Huong Nguyen <huongnv13@gmail.com>
 * This plugin based on tiny_equation from Huong Nguyen <huongnv13@gmail.com> was adapted for tiny_chemistry for Moodle 5.1
 * by Teaching and Learning Center (TLC, tlc@fh-ooe.at), FH Upper Austria
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getTinyMCE} from 'editor_tiny/loader';
import {getPluginMetadata} from 'editor_tiny/utils';

import {component, pluginName} from 'tiny_chemistry/common';
import * as Commands from 'tiny_chemistry/commands';
import * as Configuration from 'tiny_chemistry/configuration';
import * as Options from 'tiny_chemistry/options';

// eslint-disable-next-line no-async-promise-executor
export default new Promise(async(resolve) => {
    const [
        tinyMCE,
        setupCommands,
        pluginMetadata,
    ] = await Promise.all([
        getTinyMCE(),
        Commands.getSetup(),
        getPluginMetadata(component, pluginName),
    ]);

    tinyMCE.PluginManager.add(`${component}/plugin`, (editor) => {
        // Register options.
        Options.register(editor);

        // Setup the Commands (buttons, menu items, and so on).
        setupCommands(editor);

        return pluginMetadata;
    });

    // Resolve the Chemistry Plugin and include configuration.
    resolve([`${component}/plugin`, Configuration]);
});
