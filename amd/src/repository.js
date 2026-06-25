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
 * A javascript module to handle TinyMCE Chemistry ajax actions.
 *
 * @module      tiny_chemistry/repository
 * @copyright   2022 Huong Nguyen <huongnv13@gmail.com>
 * This plugin based on tiny_equation from Huong Nguyen <huongnv13@gmail.com> was adapted for tiny_chemistry for Moodle 4.5
 * by Teaching and Learning Center (TLC, tlc@fh-ooe.at), FH Upper Austria
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
import Ajax from 'core/ajax';

/**
 * Filter the chemistry for given content.
 *
 * @param {Number} contextId The context id
 * @param {String} content Content to filter
 * @param {Bool} stripTags  Whether to strip HTML tags (optional)
 * @return {promise}
 */
export const filterChemistry = (contextId, content, stripTags = false) => {
    const request = {
        methodname: 'tiny_chemistry_filter',
        args: {
            contextid: contextId,
            content: content,
            striptags: stripTags,
        }
    };

    return Ajax.call([request])[0];
};
