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
    experience = models.TextField()
    github = models.CharField(max_length=255, blank=True, null=True,)

class Experience(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='related_experience',)
    name = models.CharField(max_length=255,)
    from_date = models.DateField()
    to_date = models.DateField()


