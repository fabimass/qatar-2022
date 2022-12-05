
export interface GoalProps{
    order: number                   // Goal order
    minute: string                  // Minute when the goal was scored
    author: string                  // Player who scored
    team: number                    // Team which scored
}

export interface PenaltyProps{
    team_1: number | null           // Local team score in penalties stage
    team_2: number | null           // Away team score in penalties stage
}

export interface MatchProps{
    order: number                   // Match order
    team_1: string                  // Local team
    team_1_goals: number | null     // Local team score
    team_2: string                  // Away team
    team_2_goals: number | null     // Away team score
    goals: Array<GoalProps>         // Goals scored
    photo: string                   // A photo of the match
    inline?: boolean                // Indicates if the match is going to be presented inline or vertical
    inverted?: boolean              // Indicates if the match is in its normal position or the opposite
    floatingDetails?: boolean       // Indicates if the details will float on the screen or not
    invertedDetails?: boolean       // Indicates if the details are in their normal position or the opposite
    penalties?: PenaltyProps        // Indicates the score if the match went to penalties stage
}

export interface TeamProps{
    name: string                    // Country
    goals: number | null            // Team score
    oneline: boolean                // Indicates if the team will be on the same line than its rival
    reverse: boolean                // Indicates if the team will be aligned to the left or to the right
    penalties?: number | null       // Score if the match was resolved by penalties
}

export interface GroupProps{
    name: string                    // Name of the group
    matches: Array<MatchProps>      // All the matches in that group
}

export interface GroupsProps{
    groups: Array<GroupProps>       // List of groups
}

export interface PlayoffColumnProps{
    matches: Array<MatchProps>      // Matches to be shown on the specific column
    margins?: Margins               // Margins to be applied between matches in the column
    inverted?: boolean              // Indicates if the column will be on the right or left side
}

export interface MatchPairing{      // Match pairing is used in the playoff stages for the chart
    match1: MatchProps              // First match
    match2: MatchProps              // Second match
}

export interface Margins{
    margin1: number                 // This is gonna be the top and bottom margin for the whole column
    margin2: number                 // This is gonna be the margin between pairs of matches
    margin3: number                 // This is gonna be the margin between matches inside a pair
}

export interface ConnectorProps{
    inverted: boolean               // Indicates if the connector is in its normal position or the opposite
    double?: boolean                // Indicates if this is a single or double connector
    tshape?: boolean                // Indicates if it is a T shape connector or not
}