import rulesData from "../mock/rules.json";
export function Rules() {
    return (
        <>
            <ol className="listRules">
            {rulesData.base.map((rule) => { return(
                <>
                    <li className="ruleTitle">{rule.title}
                        <ul>
                            {rule.pillars.map(pillar => <><li className="rulePillar">{pillar}</li></>)}
                        </ul>
                        <ul>
                            { rule.infractions ? <><li>Infrações:</li></> : <></>}
                            {rule.infractions?.map((e) => <><li className="infractions"><div className="severity">{e.type}</div> - {e.action}</li></>)}
                        </ul>
                    </li>
                    
                </>
            )})}
            </ol>
        </>
    );
}