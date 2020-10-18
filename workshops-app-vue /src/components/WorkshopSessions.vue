<template>
    <div>
        <div class = "row" v-if = "this.status === 'LOADING'">
            <div class = "col-12">
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>Loading Workshop Sessions...</strong> 
                </div>
            </div>
        </div>

        <div class = "row">
            <div class = "col-12" v-if = "this.status === 'ERROR_LOADING'">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>{{this.error.message}}</strong>
                </div>
            </div>
        </div>
    
        <div v-if = "this.status === 'LOADED'">
            <h1>Sessions in this Workshop</h1>
            <hr />
            <ul class = "session-row" >
                <li class = "session-col card" v-for="workshopSession in this.workshopSessions" :key="workshopSession.id" >
                    <div class="upvoteCount" :id = "workshopSession.id">
                        <i class="fa fa-caret-up fa-2x" @click="updateUpvoteCount( workshopSession.id, 'upvote' )"/>
                        <h6 class="unbold">{{workshopSession.upvoteCount}}</h6>
                        <i class="fa fa-caret-down fa-2x" @click="updateUpvoteCount( workshopSession.id, 'downvote' )"/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title unbold">{{workshopSession.name}}</h5>
                        <h6 class="card-title">by {{workshopSession.speaker}}</h6>
                        <!-- <span class="badge">{{difficultyLevel(workshopsession.level)}}</span> -->
                        <span class="badge badge-success" v-if="workshopSession.level === 'Basic'">{{workshopSession.level}}</span> 
                        <span class="badge badge-info" v-else-if="workshopSession.level === 'Intermediate'">{{workshopSession.level}}</span> 
                        <span class="badge badge-warning" v-else-if="workshopSession.level === 'Advanced'">{{workshopSession.level}}</span> 
                        <p class="card-text">{{workshopSession.duration}} hours</p>
                        <p class="card-text">{{workshopSession.abstract}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { fetchWorkshopSessions, updateSessionUpvoteCount } from '../services/workshops';

const LOADING = 'LOADING', LOADED = 'LOADED', ERROR_LOADING = 'ERROR_LOADING';

export default {
    name: 'WorkshopSessions',
    data() {
        return {
            status: LOADING,
        };
    },
    // components: {
    //     FontAwesomeIcon,
    // },
    props: ['workshopId'],
    methods: {
        // difficultyLevel( level ) {
        //     const badgeEl = this.$el.querySelector('span');
        //     console.log( level );
        //     console.log( badgeEl.classList );
        //     if ( level === 'basic' ) {
        //         badgeEl.classList.add( 'badge-success' );
        //     } else if ( level === 'intermediatte' ) {
        //         badgeEl.classList.add( 'badge-info' );
        //     } else {
        //         badgeEl.classList.add( 'badge-warning' );
        //     }
        // },
        updateUpvoteCount( workshopSessionId, voteType ) {
            updateSessionUpvoteCount(workshopSessionId, voteType)
                    .then( upvoteCountResponse => {
                        this.$toast.success(`Your vote for <strong>${upvoteCountResponse.name}</strong> was registerd`);
                        const sessions = this.$el.querySelectorAll( '.upvoteCount' );
                        sessions.forEach( session =>  {
                            if ( session.id == upvoteCountResponse.id ) {
                                session.children[1].innerText = upvoteCountResponse.upvoteCount;
                            }
                        });
                        console.log (upvoteCountResponse);
                    })
                    .catch ( error => {
                        this.$toast.error( error );
                        console.log( error );
                    });
        }
    },
    mounted() {
        fetchWorkshopSessions( this.workshopId )
                .then( workshopSessions => {
                    this.status = LOADED;
                    this.workshopSessions = workshopSessions;
                })
                .catch ( error => {
                    this.status = ERROR_LOADING;
                    this.error = error;
                });
    }
}
</script>

<style scoped>
.unbold {
    font-weight:300 !important;
}

.session-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    padding: 0;
}

.session-col {
    flex-basis: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
}


.upvoteCount {
    margin-top: 20px;
    flex-basis: 10%;
    text-align: center;
    min-width: 120px;
}

.fa {
    color: darkgray;
}
</style>