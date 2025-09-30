import { Component, Input, Output, EventEmitter, output } from '@angular/core';

interface User {														// može i type
	id: string;
	avatar: string;
	name: string;
}

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) user!: User;							    // umjesto da sveki property objekta zasebno
    @Output() select = new EventEmitter<string>();

    get imagePath() {
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser() {
        this.select.emit(this.user.id);
    }
}
