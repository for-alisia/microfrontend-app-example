# How to set up AWS for deployment
## S3 Bucket Creation and Configuration

Go to AWS Management Console and use the search bar to find S3

1. Click Create Bucket

2. Specify an AWS Region

3. Provide unique Bucket Name and click Create Bucket

4. Click the new Bucket you have created from the Bucket list.

5. Select Properties

6. Scroll down to Static website hosting and click Edit

7. Change to Enable

8. Enter index.html in the Index document field

9. Click Save changes

10. Select Permissions

11. Click Edit in Block all public access

12. Untick the Block all public access box.

13. Click Save changes

14. Type confirm in the field and click Confirm

15. Find the Bucket Policy and click Edit

16. Click Policy generator

17. Change Policy type to S3 Bucket Policy

18. Set Principle to *

19. Set Action to Get Object

20. Copy the S3 bucket ARN to add to the ARN field and add /* to the end.
eg: arn:aws:s3:::mfe-dashboard/*

21. Click Add Statement

22. Click Generate Policy

23. Copy paste the generated policy text to the Policy editor

24. Click Save changes


## CloudFront setup

Go to AWS Management Console and use the search bar to find CloudFront

1. Click Create distribution

2. Set Origin domain to your S3 bucket

3. Find the Default cache behavior section and change Viewer protocol policy to Redirect HTTP to HTTPS

4. Scroll down and click Create Distribution

5. After Distribution creation has finalized click the Distribution from the list, find its Settings and click Edit

6. Scroll down to find the Default root object field and enter /container/latest/index.html

7. Click Save changes

8. Click Error pages

9. Click Create custom error response

10. Change HTTP error code to 403: Forbidden

11. Change Customize error response to Yes

12. Set Response page path to /container/latest/index.html

13. Set HTTP Response Code to 200: OK


## Create IAM user

Go to AWS Management Console and use the search bar to find IAM

1. In IAM dashboard, click Users in the left sidebar

2. Click Add Users

3. Enter a unique name in the User name field

4. In Select AWS credential type tick Access Key - Programmatic access

5. Click Next: Permissions

6. Select Attach existing policies directly

7. Use search bar to find and tick AmazonS3FullAccess and CloudFrontFullAccess

8. Click Next: Tags

9. Click Next: Review

10. Click Create user

