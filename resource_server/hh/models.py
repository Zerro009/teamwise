from django.db import models

ROLE_CHOICES=[
    ('PJM', 'Project manager'),
    ('PDM', 'Product manager'),
    ('AR',  'Arhitect'),
    ('T',   'Tech Lead'),
    ('B',   'Backend'),
    ('F',   'Frontend'),
    ('FF',  'Fullstack'),
    ('D',   'Designer'),
    ('DA',  'Data analysis'),
    ('DO',  'DevOps'),
    ('P',   'Pentest'),
    ('SS',  'Security specialist'),
    ('ML',  'Machine learning'),
    ('M',   'Mentor'),
    ('O',   'Other'),
]

class TeamManager(models.Manager):
    def invite(self, team, to_user, role):
        if TeamMember.objects.filter(team=team, user=to_user).exists():
            raise AlreadyExistsError('This user is already this team\'s member')
        if TeamInvite.objects.filter(team=team, to_user=to_user).exists():
            raise AlreadyExistsError('This user was already invited to this team')
        if team.user == to_user:
            raise Exception('This user is team\'s owner')
        invite = TeamInvite.objects.create(team=team, to_user=to_user)
        return invite

    def kick(self, team, user):
        if not TeamMember.objects.filter(team=team, user=user).exists():
            raise Exception('This user\'s not this team\'s member')
        member = TeamMember.objects.get(team=team, user=user)
        member.delete()
        return member

class News(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField()
    description = models.TextField()
    date = models.DateTimeField()

class Resume(models.Model):
    '''
    Resume is a presentation of user's skills and experince
    in different roles
    '''
    user = models.IntegerField()
    name = models.CharField(max_length=255, blank=False, null=False)
    role = models.CharField(max_length=255, choices=ROLE_CHOICES)

class Team(models.Model):
    '''
    Union of some users made to create projects cooperatively
    '''
    user = models.IntegerField()
    name = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField()

class TeamInvite(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    to_user = models.IntegerField()
    role = models.CharField(max_length=255, choices=ROLE_CHOICES)

class TeamMember(models.Model):
    user = models.IntegerField()
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    role = models.CharField(max_length=255, choices=ROLE_CHOICES)
