import gitP, { SimpleGit, StatusResult } from 'simple-git/promise'

import gitConfig from '../gitConfig.json'

export class Git {
    private git: SimpleGit

    constructor() {
        this.git = gitP()
        this.git.cwd('./blog')
    }

    async pull() {
        return await this.git.pull('origin', 'master')
    }
}
