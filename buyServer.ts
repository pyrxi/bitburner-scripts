/** @param {NS} ns */
export async function main(ns) {
    const scriptName = ns.args[0];

    const ram = 8;

    let servers = ns.getPurchasedServers(); 

    for (let i = servers.length; i < ns.getPurchasedServerLimit(); i++) {
        let hostname = "pyrBox-" + i;
        ns.purchaseServer(hostname, ram);

        let threads = Math.trunc(ns.getServerMaxRam(hostname) / ns.getScriptRam(scriptName));
        await ns.scp(scriptName, hostname);
        if (threads > 0) {
          await ns.exec(scriptName, hostname, threads);
        }
    }
}