import htm from "htm/mini";
import vhtml from "vhtml";
import { parseHistory, msg } from "./utils.js";

const html = htm.bind(vhtml);

/** プラグインをインストール */
const install = (hook, vm) => {
  hook.afterEach((content) => {
    if (!vm.frontmatter) {
      console.warn(
        msg(
          "before install official front matter plugin. see https://www.npmjs.com/package/docsify-plugin-page-history#install",
        ),
      );

      return content;
    }

    const history = parseHistory(vm.frontmatter.history);
    const lastModified = history[0]?.date;

    const details = html`
      <details class="docsify-page-history">
        <summary>
          ${lastModified ? `Last modified at ${lastModified}` : "No history"}
        </summary>
        ${history.length
          ? html`
              <dl>
                ${history.map(
                  ({ date, message }) => html`
                    <dt><strong>${date}</strong></dt>
                    <dd
                      dangerouslySetInnerHTML=${{
                        __html: marked(message, { breaks: true }),
                      }}
                    />
                  `,
                )}
              </dl>
            `
          : html`<p>There is no history for this page.</p>`}
      </details>
    `;

    return `${content}${details}`;
  });
};

$docsify.plugins = [].concat(install, $docsify.plugins);
