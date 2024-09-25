from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from .views import SignUpView, SignInView, LectureViewSet, CheckStudentPresence, GetAllPresentStudents, MarkStudentPresentView
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'lecture', LectureViewSet, basename='lecture')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sign-up/', SignUpView.as_view(), name='Sign Up'),
    path('sign-in/', SignInView.as_view(), name='Sign In'),
    path('mark-present/', MarkStudentPresentView.as_view(), name='mark-student-present'),
    path('lecture/<int:lecture_id>/present/', GetAllPresentStudents.as_view(), name='get-all-present-students'),
    path('lecture/<int:lecture_id>/student/<int:student_id>/presence/', CheckStudentPresence.as_view(), name='check-student-presence'),
    path('', include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)