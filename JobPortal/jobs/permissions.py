from rest_framework.permissions import BasePermission


class IsRecruiterOwner(
    BasePermission
):

    def has_object_permission(
        self,
        request,
        view,
        obj
    ):

        return obj.recruiter == request.user