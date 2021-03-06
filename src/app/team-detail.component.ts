import 'rxjs/add/operator/switchMap';
import { Component, Input }        from '@angular/core';
import { DomSanitizer, SafeHtml }            from '@angular/platform-browser';

import { TeamService }  from './team.service';

@Component({
  moduleId: module.id,
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: [ './team-detail.component.css' ]
})

export class TeamDetailComponent {
  @Input() teamID: number;
  offenseStats: boolean = true;
  defenseStats: boolean = false;
  // innerHTML: any = this.teams.overallTeamStandings.teamStandingsEntry[teamID-1].;
  constructor (
    private teamService: TeamService,
    private _sanitizer: DomSanitizer
  ) {}
  teams = this.teamService
    .getTeams()
    .subscribe(data => {console.log('Data: ', data); this.teams = data; });
  showOffense(): void {
    if (this.defenseStats === true) {
      this.defenseStats = false;
    }
    this.offenseStats = true;
  }
  showDefense(): void {
    if (this.offenseStats === true) {
      this.offenseStats = false;
    }
    this.defenseStats = true;
  }

}
